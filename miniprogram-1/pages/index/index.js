Page({
  data: {
    numArray: [],
    numStr: "",
    op: "",
    result: ""
  },
  clear() {
    this.setData({
      numArray: [],
      numStr: "",
      op: "",
      result: ""
    });
  },
  del: function () {
    let numArray = this.data.numArray;
    numArray.pop();
    this.setData({ numArray });
  },
  dot: function () {
    let numStr = this.data.numStr;
    if (!numStr.includes(".")) {
      numStr += ".";
    }
    this.setData({ numStr });
  },
  percent: function () {
    let numStr = this.data.numStr;
    let newNumStr = parseFloat(numStr) / 100;
    this.setData({ numStr: newNumStr.toString() });
  },
  op(e) {
    var value = e.currentTarget.dataset.op;
    let numArray = this.data.numArray;
    numArray.push(parseFloat(this.data.numStr));
    this.setData({
      op: value,
      numArray,
      numStr: ""
    });
  },
  cal() {
    let numArray = this.data.numArray;
    numArray.push(parseFloat(this.data.numStr));

    let result = numArray.reduce((accumulator, currentValue) => {
      switch (this.data.op) {
        case "+":
          return accumulator + currentValue;
        case "-":
          return accumulator - currentValue;
        case "×":
          return accumulator * currentValue;
        case "÷":
          return accumulator / currentValue;
        case "^":
          return Math.pow(accumulator, currentValue);
        // Add cases for other operations if needed
        default:
          return accumulator;
      }
    }, 0);

    this.setData({
      result: result.toString(),
      numArray: [],
      op: "",
      numStr: ""
    });
  },
  numBtn(e) {
    var value = e.currentTarget.dataset.num;
    this.setData(
      {
        numStr: this.data.numStr == "0" ?
          value : this.data.numStr + value
      }
    );
  }
})
