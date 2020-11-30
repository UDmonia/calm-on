const milkTreeData = {
  key: null,
  question: "Hey Joe, would you like to hear something really cool?",
  answers: ["Yes, please!", "Maybe later"],
  animations: null,
  nxtNode: [
    {
      key: "Yes, please!",
      question: 'Great! You will love it! Could you say the word "milk" once?',
      answers: ["No", "Yeah"],
      animation: null,
      nxtNode: [
        {
          key: "No",
          question:
            "Alright, what came to mind when you said it? You can choose one of the options above:",
          answers: ["to be here", "I am not", "Bubble"],
          animation: null,
          nxtNode: [
            {
              key: "to be here",
              question: "Saf",
              answers: ["All done!"],
              animation: null,
              nxtNode: [],
            },
            {
              key: "I am not",
              question: "Anger",
              answers: ["Done we are"],
              animation: null,
              nxtNode: [],
            },
            {
              key: "Bubble",
              question: "Dabble",
              answers: ["Finish"],
              animation: null,
              nxtNode: [],
            },
          ],
        },
        {
          key: "Yeah",
          question: "Hello",
          animation: null,
          answers: ["your", "chicken"],
          nxtNode: [],
        },
      ],
    },
    { key: "Maybe later", nxtNode: [] },
  ],
};

export default milkTreeData;
