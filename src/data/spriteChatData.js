import { SpriteActivityData } from "./activityData";

const spriteHappy = {
  key: null,
  question:
    "I heard you were feeling happy today. Can I tell you a story about the last time I felt happy?",
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
                  navInfo: SpriteActivityData[3], // info for "boxBreathing"
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
                  navInfo: "FilteredActivities",
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

const spriteSad = {
  key: null,
  question:
    "I heard you were feeling sad today. Can I tell you a story about a time when I was sad too?",
  answers: ["Ok"],
  animation: null,
  renderAnim: "",
  navInfo: null,
  nxtNode: [
    {
      key: "Ok",
      question:
        "I woke up late for our school field trip once! I got a lecture for waking up late on top of missing my friends. Did you ever feel sad?",
      answers: ["Yes!", "No"],
      animation: null,
      renderAnim: "",
      navInfo: null,
      nxtNode: [
        {
          key: "Yes!",
          question:
            "It's ok to be sad about it. Oh, I know! How about we go on an adventure together?",
          answers: ["Let's go!"],
          animation: null,
          renderAnim: "",
          navInfo: null,
          nxtNode: [
            {
              key: "Let's go!",
              question: "Where do you want to go?",
              answers: ["Box Breathing", "Going on an Adventure"],
              animation: null,
              renderAnim: "",
              navInfo: null,
              nxtNode: [
                {
                  key: "Box Breathing",
                  question: "",
                  answers: [],
                  animation: null,
                  renderAnim: "",
                  navInfo: SpriteActivityData[0],
                  nxtNode: [],
                },
                {
                  key: "Going on an Adventure",
                  question: "",
                  answers: [],
                  animation: null,
                  renderAnim: SpriteActivityData[0],
                  navInfo: null,
                  nxtNode: [],
                },
              ],
            },
          ],
        },
        {
          key: "No",
          question:
            "I woke up late for our school field trip once! I got a lecture for waking up late on top of missing my friends. Did you ever feel sad?",
          answers: ["Yes!", "No"],
          animation: null,
          renderAnim: "",
          navInfo: null,
          nxtNode: [],
        },
      ],
    },
  ],
};

const spriteAngry = {
  key: null,
  question:
    "I heard you were feeling angry today. I was feeling the same thing a few days ago. Is it okay if i talk about it with you?",
  answers: ["Sure"],
  animation: null,
  renderAnim: "",
  navInfo: null,
  nxtNode: [
    {
      key: "Sure",
      question:
        "I like to do fun activities such as flying around the playground, eating at the cafeteria, and playing games.",
      answers: ["..."],
      animation: null,
      renderAnim: "",
      navInfo: null,
      nxtNode: [
        {
          key: "...",
          question:
            "I wanted to play tag with my friends, but they wanted to play something else.",
          answers: ["..."],
          animation: null,
          renderAnim: "",
          navInfo: null,
          nxtNode: [
            {
              key: "...",
              question:
                "I felt upset. My hands curled into a fist and my body felt tight.",
              answers: ["..."],
              animation: null,
              renderAnim: "",
              navInfo: null,
              nxtNode: [
                {
                  key: "...",
                  question:
                    "Have you ever been in a situation when somebody didn’t want to do the same thing as you?",
                  answers: ["Yes, that happened to me before!"],
                  animation: null,
                  renderAnim: "",
                  navInfo: null,
                  nxtNode: [
                    {
                      key: "Yes, that happened to me before!",
                      question:
                        "It is normal to feel angry.  Being aware of your anger is important; so you don't harm yourself or others.",
                      answers: ["..."],
                      animation: null,
                      renderAnim: "",
                      navInfo: null,
                      nxtNode: [
                        {
                          key: "...",
                          question:
                            "When I get angry, I usually take a walk or take deep breaths. Do you want to try it with me?",
                          answers: ["Ok", "No, not right now."],
                          animation: null,
                          renderAnim: "",
                          navInfo: null,
                          nxtNode: [
                            {
                              key: "Ok",
                              question:
                                "I’m so happy you chose to join me. Which one do you want to try?",
                              answers: [
                                "Box Breathing",
                                "Going on an Adventure(Temp)",
                              ], // Update when the new activity is added, Dragon Breath belongs here
                              animation: null,
                              renderAnim: "",
                              navInfo: null,
                              nxtNode: [
                                {
                                  key: "Box Breathing",
                                  question: "",
                                  answers: [],
                                  animation: null,
                                  renderAnim: "",
                                  navInfo: SpriteActivityData[3], // info for "boxBreathing"
                                  nxtNode: [],
                                },
                                {
                                  key: "Going on an Adventure",
                                  question: "",
                                  answers: [],
                                  animation: null,
                                  renderAnim: "",
                                  navInfo: SpriteActivityData[0],
                                  nxtNode: [],
                                },
                              ],
                            },
                            {
                              key: "No, not right now.",
                              question:
                                "That’s ok. We can try other activities next time.",
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
                                  navInfo: "FilteredActivities",
                                  nxtNode: [],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const spriteScared = {
  key: null,
  question:
    "I heard you were feeling scared today.  It’s okay! Can I tell you about a time I felt scared?",
  answers: ["Ok"],
  animation: null,
  renderAnim: "",
  navInfo: null,
  nxtNode: [
    {
      key: "Ok",
      question:
        "Last night, I had a dream that a big fairy eating beast swept down and ate me. I got scared and woke up.",
      answers: ["..."],
      animation: null,
      renderAnim: "",
      navInfo: null,
      nxtNode: [
        {
          key: "...",
          question: "Did you ever wake up because of a bad dream?",
          answers: ["Yea!", "Nope!"],
          animation: null,
          renderAnim: "",
          navInfo: null,
          nxtNode: [
            {
              key: "Yea!",
              question:
                "I could not go back to sleep so I called Aurora and she reminded me it was just a dream!",
              answers: ["..."],
              animation: null,
              renderAnim: "",
              navInfo: null,
              nxtNode: [
                {
                  key: "...",
                  question:
                    "If you feel scared, talk to someone about it. It is easier to face your fears with someone by your side.",
                  answers: ["..."],
                  animation: null,
                  renderAnim: "",
                  navInfo: null,
                  nxtNode: [
                    {
                      key: "...",
                      question: "Now, let’s go do some fun activities!",
                      answers: ["Ok!"],
                      animation: null,
                      renderAnim: "",
                      navInfo: null,
                      nxtNode: [
                        {
                          key: "Ok!",
                          question: "",
                          answers: [],
                          animation: null,
                          renderAnim: "",
                          navInfo: "FilteredActivities",
                          nxtNode: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              key: "Nope!",
              question:
                "Well, it is terrible! I could not go back to sleep so I called Aurora and she reminded me it was just a dream!",
              answers: ["..."],
              animation: null,
              renderAnim: "",
              navInfo: null,
              nxtNode: [
                {
                  key: "...",
                  question:
                    "If you feel scared, talk to someone about it. It is easier to face your fears with someone by your side.",
                  answers: ["..."],
                  animation: null,
                  renderAnim: "",
                  navInfo: null,
                  nxtNode: [
                    {
                      key: "...",
                      question: "Now, let’s go do some fun activities!",
                      answers: ["Ok!"],
                      animation: null,
                      renderAnim: "",
                      navInfo: null,
                      nxtNode: [
                        {
                          key: "Ok!",
                          question: "",
                          answers: [],
                          animation: null,
                          renderAnim: "",
                          navInfo: "FilteredActivities",
                          nxtNode: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const spriteWorried = {
  key: null,
  question:
    "I heard you were feeling worried today. Can I tell you about a time when I felt worried too?",
  answers: ["Ok"],
  animation: null,
  renderAnim: "",
  navInfo: null,
  nxtNode: [
    {
      key: "Ok",
      question:
        "One night, I had a Pixie History test coming up and I totally forgot! I could barely study, I was so stressed.",
      answers: ["..."],
      animation: null,
      renderAnim: "",
      navInfo: null,
      nxtNode: [
        {
          key: "...",
          question: "Have you ever felt worried about something too?",
          answers: ["Yes"],
          animation: null,
          renderAnim: "",
          navInfo: null,
          nxtNode: [
            {
              key: "Yes",
              question:
                "It's ok to be worried. But worrying can make it tough to think properly, so try to work through that feeling first.",
              answers: ["..."],
              animation: null,
              renderAnim: "",
              navInfo: null,
              nxtNode: [
                {
                  key: "...",
                  question:
                    "I know what can help! Do you want to try some of these activities with me?",
                  answers: ["Ok", "No, not right now."],
                  animation: null,
                  renderAnim: "",
                  navInfo: null,
                  nxtNode: [
                    {
                      key: "Ok",
                      question: "Awesome!",
                      answers: [
                        "Box Breathing",
                        "54321 Technique",
                        "Calm Counting",
                      ],
                      animation: null,
                      renderAnim: "",
                      navInfo: null,
                      nxtNode: [
                        {
                          key: "Box Breathing",
                          question: "",
                          answers: [],
                          animation: null,
                          renderAnim: "",
                          navInfo: SpriteActivityData[3],
                          nxtNode: [],
                        },
                        {
                          key: "54321 Technique",
                          question: "",
                          answers: [],
                          animation: null,
                          renderAnim: "",
                          navInfo: SpriteActivityData[0],
                          nxtNode: [],
                        },
                        {
                          key: "Calm Counting",
                          question: "",
                          answers: [],
                          animation: null,
                          renderAnim: "",
                          navInfo: SpriteActivityData[1],
                          nxtNode: [],
                        },
                      ],
                    },
                    {
                      key: "No, not right now.",
                      question: "Ok, we can try other activities next time.",
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
                          navInfo: "FilteredActivties",
                          nxtNode: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export { spriteHappy, spriteSad, spriteAngry, spriteScared, spriteWorried };
