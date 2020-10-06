class Node {
  constructor(question, lstAns, mapNode) {
    this._question = question;
    this._lstAns = lstAns;
    this._mapNode = mapNode;
  }

  printNode(x) {
    return (
      x +
      "Question: " +
      this._question +
      " AnswerList: " +
      this._lstAns +
      " NodeMap: " +
      this._mapNode
    );
  }

  get question() {
    return this._question;
  }

  set question(x) {
    this._question = x;
  }

  get lstAns() {
    return this._lstAns;
  }

  set lstAns(x) {
    this._lstAns = x;
  }

  get mapNode() {
    return this._mapNode;
  }

  set mapNode(x) {
    this._mapNode = x;
  }
}

export default Node;
