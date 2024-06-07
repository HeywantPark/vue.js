let obj = { result: 0 };
obj.add = (x, y) => {
  function inner() {
    this.result = x + y;
  }
  inner();
};
obj.add(3, 4);
console.log(obj);
console.log(result);
