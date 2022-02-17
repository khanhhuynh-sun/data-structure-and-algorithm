function Stack() {
  const array = [];
  let top = 0;

  this.push = function (data) {
    array[top++] = data;
  };
  this.pop = function () {
    return array[--top];
  };
  this.peek = function () {
    return array[top - 1];
  };
}

const myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);

console.log(myStack.pop());
