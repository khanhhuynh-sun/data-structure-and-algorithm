const Merge = (arrLeft, arrRight) => {
  const arr = [];
  while (arrLeft.length && arrRight.length) {
    if (arrLeft[0] < arrRight[0]) {
      arr.push(arrLeft.shift());
    } else {
      arr.push(arrRight.shift());
    }
  }
  return [...arr, ...arrLeft, ...arrRight];
};

const MergeSort = (array) => {
  let mid = array.length / 2;

  if (array.length < 2) return array;

  const arrLeft = array.splice(0, mid);
  return Merge(MergeSort(arrLeft), MergeSort(array));
};

const array = [3, 7, 2, 4, 0, 5, 1, 6];

console.log(MergeSort(array));
