//Modify this array to add more screens
const boxBreathingData = {
  //Modify this array to add more screens
  storyMap: [
    {
      question:
        "While we walk and breathe, follow the instructions on the sand. Click 'Go' when you're ready to start!",
      answers: ["Go!"],
      background: "forest",
    },
  ],
  storyMap1: [
    //branch1
    {
      question:
        "That was so much fun, and I feel much calmer now. What about you?",
      answers: ["I feel calmer too!", "I don't feel different"],
      img: require("../../assets/boxBreathing/outro/spirit1.png"),
    },
    {
      question:
        "That's great to hear! I always enjoy going ton walks with you, let's walk again soon!",
      answers: ["I also had fun, bye for now!", "Can we walk again now?"],
      img: require("../../assets/boxBreathing/outro/spirit2.png"),
    },
    {
      question:
        "Okay, I'm looking forwaard to doing more activities with you! Goodbye!",
      answers: ["Bye Bye!"],
      img: require("../../assets/boxBreathing/outro/spirit1.png"),
    },

    //branch2
    {
      question:
        "Hmm, would you like to go walk some more? Sometimes it takes some time to feel better",
      answers: ["Yea, let's walk again?", "I want to try a different activity"],
      img: require("../../assets/boxBreathing/outro/spirit3.png"),
    },
  ],
};

export default boxBreathingData;
