require("dotenv").config();
const { Strategy, ExtractJwt } = require("passport-jwt");

const User = require("../models/user");

const secret = process.env.SECRET;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret,
};

const initPassportStrategy = (passport) => {
  const theJwtStrategy = new Strategy(opts, async (jwtPayload, done) => {
    try {
      const user = await User.findById(jwtPayload.id);
      return user ? done(null, user) : done(null, false);
    } catch (err) {
      console.log("error", err);
      return done(null, null);
    }
  });

  passport.use(theJwtStrategy);
};

module.exports = initPassportStrategy;
