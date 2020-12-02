const milkTreeData = {
  key: null,
  question: "Hey Joe, would you like to hear something really cool?",
  answers: ["Yes, please!", "Maybe later"],
  animations: null,
  nxtNode: [
    {
      key: "Yes, please!",
      question: 'Great! You will love it! Could you say the word "milk" once?',
      answers: ["I said it!", "I thought it!"],
      animation: "() => this._fade()",
      nxtNode: [
        {
          key: "I said it!",
          question:
            "Alright, what came to mind when you said it? You can choose one of the options above:",
          answers: ["refrigerator", "I like milk", "I have some at home"],
          animation: null,
          nxtNode: [
            {
              key: "refrigerator",
              question:
                "Do any of these pop up in your mind when we say milk? You can choose one of the options above:",
              answers: ["All done!"],
              animation: null,
              nxtNode: [],
            },
            {
              key: "I like milk",
              question:
                "Do any of these pop up in your mind when we say milk? You can choose one of the options above:",
              answers: ["Done we are"],
              animation: null,
              nxtNode: [],
            },
            {
              key: "I have some at home",
              question:
                "Do any of these pop up in your mind when we say milk? You can choose one of the options above:",
              answers: ["Finish"],
              animation: null,
              nxtNode: [],
            },
          ],
        },
        {
          key: "I thought it!",
          question:
            "Alright, what came to mind when you said it? You can choose one of the options above:",
          answers: ["refrigerator", "I like milk", "I have some at home"],
          animation: null,
          nxtNode: [
            {
              key: "refrigerator",
              question:
                "Do any of these pop up in your mind when we say milk? You can choose one of the options above:",
              answers: ["All done!"],
              animation: null,
              nxtNode: [],
            },
            {
              key: "I like milk",
              question:
                "Do any of these pop up in your mind when we say milk? You can choose one of the options above:",
              answers: ["Done we are"],
              animation: null,
              nxtNode: [],
            },
            {
              key: "I have some at home",
              question:
                "Do any of these pop up in your mind when we say milk? You can choose one of the options above:",
              answers: ["Finish"],
              animation: null,
              nxtNode: [],
            },
          ],
        },
      ],
    },
    { key: "Maybe later", nxtNode: [] },
  ],
};

export default milkTreeData;
