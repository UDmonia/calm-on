import React from "react";
import renderer from "react-test-renderer";
// import chatPlaceholder from "../chatPlaceholder";
import {
  getDialogue,
  defaultDialogue,
  getEmotion,
  findNode,
  isEmpty,
} from "../chatPlaceholder";
import { spriteSad, spriteHappy } from "../../data/spriteChatData";

describe("getDialogue tests", () => {
  it("getDialogue should return the dialogue for spriteSad", () => {
    expect(getDialogue("sad", "Sprite")).toBe(spriteSad);
  });

  it("getDialogue should fail due to wrong return", () => {
    expect(getDialogue("sad", "Sprite")).not.toBe(spriteHappy);
  });

  it("getDialogue should return default dialogue since there is no emotion", () => {
    expect(getDialogue(null, "Sprite")).toBe(defaultDialogue);
  });

  it("getDialogue should return default dialogue nothing is valid", () => {
    expect(getDialogue(null, "Not a character")).toBe(defaultDialogue);
  });
});

describe("getEmotion tests", () => {
  const checkins = {
    "Wed Dec 16 2020": [
      {
        __v: 0,
        _id: "5fdaaac40bcd7607aa7612b4",
        author: "5fdaa63b0bcd7607aa7612b1",
        createdAt: "2020-12-17T00:48:04.813Z",
        date: "Wed Dec 16 2020 16:48:04 GMT-0800 (Pacific Standard Time)",
        id: "5fdaaac40bcd7607aa7612b4",
        journal: "",
        mood: "excited",
        updatedAt: "2020-12-17T00:48:04.813Z",
      },
      {
        __v: 0,
        _id: "5fdaac950bcd7607aa7612b5",
        author: "5fdaa63b0bcd7607aa7612b1",
        createdAt: "2020-12-17T00:55:49.710Z",
        date: "Wed Dec 16 2020 16:55:49 GMT-0800 (Pacific Standard Time)",
        id: "5fdaac950bcd7607aa7612b5",
        journal: "",
        mood: "angry",
        updatedAt: "2020-12-17T00:55:49.710Z",
      },
    ],
  };

  it("getEmotion should return null", () => {
    expect(getEmotion({})).toBe(null);
  });

  it("getEmotion should return angry", () => {
    expect(getEmotion(checkins)).toBe("angry");
  });
});

describe("findNode tests", () => {
  it('findNode should return the object with the key "Ok"', () => {
    expect(findNode("Ok", spriteHappy.nxtNode)).toBe(spriteHappy.nxtNode[0]);
  });

  it('findNode should return undefined"', () => {
    expect(findNode("Im not a key", spriteHappy.nxtNode)).toBe(undefined);
  });
});

describe("isEmpty tests", () => {
  it("isEmpty should return false", () => {
    expect(isEmpty({})).toBe(true);
  });

  it("isEmpty should return true", () => {
    expect(isEmpty({ attr: "I'm not empty" })).toBe(false);
  });
});
