const Partition = (array, left, right) => {
  let pivot = right;
  this.left = left;
  this.right = right - 1;

  while (this.left < this.right) {
    while (this.left <= this.right && array[this.left] < array[pivot])
      this.left++;
    while (this.left <= this.right && array[this.right] > array[pivot])
      this.right--;

    [array[this.left], array[this.right]] = [
      array[this.right],
      array[this.left],
    ];
    this.left++;
    this.right--;
  }

  [array[this.left], array[pivot]] = [array[pivot], array[this.left]];
  return this.left;
};
