function Queue() {
  const items = [];
  let tail = 0;
  let head = 0;

  enqueue = function (data) {
    items[tail++] = data;
  };
  dequeue = function () {
    tail--;
    return items[0];
  };
}
