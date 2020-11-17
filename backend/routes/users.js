require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const passport = require("passport");

const User = require("../models/user");
const CheckIn = require("../models/checkin")
const { formatErrors, valid } = require("../util/validations");


const secret = process.env.SECRET;

const router = express.Router();
const groupCheckinsByDate = (checkins) => {
  const dict = new Map();
  for (i = 0; i < checkins.length; i++) {
    var checkin = checkins[i];
    var checkinJson = checkin.toJSON();
    var date = checkin.date;
    var localDate = date.toDateString();
    var localTime = date.toString();
    console.log("local time : " + localTime);
    checkinJson.date = localTime;
    console.log(checkinJson)
    if (!dict[localDate]) {
      dict[localDate] = [];
    }
    dict[localDate].push(checkinJson);
  }
  return dict;
}
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !valid(email) || !password || !valid(password))
    return res
      .status(422)
      .json({ error: "You need to enter an email and password" });

  const found = await User.findOne({ email });

  if (found) {
    const match = await bcrypt.compare(password, found.password);

    if (match) {
      const user = found.toJSON();
      delete user.password;
      const checkins = await CheckIn.find({author:user._id})
      const checkinGroups = groupCheckinsByDate(checkins);
      const userCopy = new User(user);
      const userCopyJson = userCopy.toJSON();
      userCopyJson.checkIns = checkinGroups;
      
      jwt.sign(user, secret, (err, token) => {
        if (token) {
          res.status(201).json({
            token: `Bearer ${token}`,
            user: userCopyJson
          });
        } else {
          res.status(500).json(err);
        }
      });
    } else {
      res.status(400).json({ error: "Invalid email or password" });
    }
  } else {
    res.status(400).json({ error: "Invalid email or password" });
  }
});

router.post("/register", async (req, res) => {
  const { email, password, birthday } = req.body;
  // console.log(req.body)
  if (
    !email ||
    !valid(email) ||
    !password ||
    !valid(password) ||
    !birthday ||
    !valid(birthday)
  )
    return res.status(422).json({
      error: "You need to enter an email, password, and date of birth",
    });

  const userData = {
    email,
    birthday,
  };

  const newUser = new User(userData);

  bcrypt.genSalt((err, salt) => {
    if (err) {
      console.log("error is", err);
    }

    bcrypt.hash(password, salt, async (error, hashedPassword) => {
      if (error) {
        console.log("error is", error);
      }
      newUser.password = hashedPassword;

      let savedUser;

      try {
        savedUser = await newUser.save();
      } catch (e) {
        return res.status(400).json(formatErrors(e));
      }

      const user = savedUser.toJSON();
      delete user.password;
      const userCopy = new User(user);
      const userCopyJson = userCopy.toJSON();
      userCopyJson.checkIns = [];
      jwt.sign(user, secret, (err, token) => {
        if (token) {
          res.status(201).json({
            token: `Bearer ${token}`,
            user: userCopyJson
          });
        } else {
          res.status(500).json(err);
        }
      });
    });
  });
});

router.put(
  "/name",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const currUser = req.user;
    console.log(currUser);
    const { name } = req.body;

    if (!name || !name.trim().length) {
      res.status(422).json({ name: "Please enter your name to continue" });
    }

    try {
      currUser.name = name;
      const savedUser = await currUser.save();
      const user = savedUser.toJSON();
      delete user.password;
      const checkins = await CheckIn.find({author:user._id})
      const checkinGroups = groupCheckinsByDate(checkins);
      const userCopy = new User(user);
      const userCopyJson = userCopy.toJSON();
      userCopyJson.checkIns = checkinGroups;
      jwt.sign(user, secret, (err, token) => {
        if (token) {
          res.status(200).json({
            token: `Bearer ${token}`,
            user: userCopyJson
          });
        } else {
          res.status(500).json(err);
        }
      });
    } catch (e) {
      res.status(500).json(e);
    }
  }
);

router.put(
  "/checkin",
  passport.authenticate('jwt',{session:false}),
  async (req, res) => {
    const currUser = req.user;
    const currUserJson = currUser.toJSON();
    var {mood, journal} = req.body;
    const moods = ["happy", "excited", "scared", "worried", "sad", "angry"];
    mood = mood.toLowerCase();
    if (!moods.includes(mood)) {
      res.status(422).json({"error": "mood is not one of the six."})
    }
    try {
      var today = new Date();
      const userid = currUser._id
      const checkInData = {
        mood: mood,
        journal: journal,
        date: today,
        author: userid
      }
      const newCheckIn = new CheckIn(checkInData)
      const savedCheckIn = await newCheckIn.save();
      const checkins = await CheckIn.find({author:userid})
      const checkinGroups = groupCheckinsByDate(checkins);
      userJson = currUser.toJSON();
      userJson.checkIns = checkinGroups;
      jwt.sign(currUserJson, secret, (err, token) => {
        if (token) {
          res.status(201).json({
            token: `Bearer ${token}`,
            user: userJson
          });
        } else {
          res.status(500).json(err);
        }
      });
      //res.status(200).json({token: userJson)
    } catch (e) {
      console.log(e)
      res.status(500).json(e);
    }
  }

)
router.get(
  "/checkedInToday",
  passport.authenticate('jwt',{session:false}),
  async (req, res) => {
    const currUser = req.user;
    if (currUser.checkIns.length == 0) {
      res.json({"message" : "has not checked in yet"});
      return
    }
    const lastCheckIn = currUser.checkIns[currUser.checkIns.length - 1].date
    var today = new Date();
    if (today.toDateString() == lastCheckIn.toDateString()) {
      res.json({"message" : "already checked in"});
    }
    else {
      res.json({"message" : "has not checked in yet"});
    }
  }
)

//User data initially pulled to client, check for tutorial boolean
//Call endpoint whenever tutorial is completed
//Don't notify tutorial if tutorial already completed
router.put("/kpi", 
passport.authenticate('jwt', {session:false}),
async(req,res) => {
  console.log(req);
  const currUser = req.user;
  const completed = currUser.tutorialComplete;
  const currUserJson = currUser.toJSON();
  if(completed){
    try{
      const userDoc = await User.findById(currUser._id);
      userDoc.tutorialComplete = true;
      await userDoc.save();
    } catch (e) {
    res.status(500).json(e);
    }
    res.status(422).json({"message" : "has already completed tutorial"})
  } else{
    res.json({"message" : "has not completed tutorial, setting complete now"})
  }
})

module.exports = router;
