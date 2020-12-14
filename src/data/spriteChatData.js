import { SpriteActivityData } from "./activityData";

const spriteHappy = {
  key: null,
  question:
    "Hey _____. I heard you were feeling happy today. Can I tell you a story about the last time I felt happy?",
  answers: ["Ok"],
  animation: null,
  renderAnim: "",
  navInfo: null,
  nxtNode: [
    {
      key: "Ok",
      question:
        "Flynn and I went on a nice hike recently. I could clearly see Fairylantis Bridge, and there was a huuuuge rainbow!",
      answers: ["That sounds like so much fun!"],
      animation: null,
      renderAnim: "",
      navInfo: null,
      nxtNode: [
        {
          key: "That sounds like so much fun!",
          question:
            "Sometimes we need to find our happiness again. How about some activities for those moments?",
          answers: ["Sure!", "No, not right now."],
          animation: null,
          renderAnim: "",
          navInfo: null,
          nxtNode: [
            {
              key: "Sure!",
              question: "Great, let’s go!",
              answers: ["5-4-3-2-1", "Box Breathing"],
              animation: null,
              renderAnim: "",
              navInfo: "",
              nxtNode: [
                {
                  key: "5-4-3-2-1",
                  question: "",
                  answers: [],
                  animation: null,
                  renderAnim: "",
                  navInfo: SpriteActivityData[0], // info for "FiveFourThreeTwoOne"
                  nxtNode: [],
                },
                {
                  key: "Box Breathing",
                  question: "",
                  answers: [],
                  animation: null,
                  renderAnim: "",
                  navInfo: SpriteActivityData[3], // info for boxBreathing
                  nxtNode: [],
                },
              ],
            },
            {
              key: "No, not right now.",
              question: "Okay we can try another activity next time!",
              answers: ["Ok"],
              animation: null,
              renderAnim: "",
              navInfo: null,
              nxtNode: [
                {
                  key: "Ok",
                  question: "",
                  answers: [],
                  animation: null,
                  renderAnim: "",
                  navInfo: "FlatActivities",
                  nxtNode: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export { spriteHappy };
