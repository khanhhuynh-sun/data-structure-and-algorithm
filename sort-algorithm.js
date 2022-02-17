//////////////////////////////////////////////////
//BubbleSort;
const BubbleSort = (array) => {
  let i = 0;
  while (i < array.length) {
    for (let j = array.length; j >= i; j--) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
    i++;
  }
};

//////////////////////////////////////////////////
//InsectionSort;
const InsectionSort = (array) => {
  for (const i in array) {
    current = i;
    if (array[current] > array[current - 1]) {
      continue;
    } else {
      for (j = i; j >= 0; j--) {
        if (array[current] < array[j]) {
          [array[j], array[current]] = [array[current], array[j]];
          current = j;
        }
      }
    }
  }
};

//////////////////////////////////////////////////
//SelectionSort;
const SelectionSort = (array) => {
  for (const i in array) {
    min = i;
    for (j = i; j < array.length; j++) {
      if (array[min] >= array[j]) min = j;
    }
    [array[i], array[min]] = [array[min], array[i]];
  }
};

//////////////////////////////////////////////////
//Quick sort
//Partition
const Partition = (array, low, high) => {
  let pivot = high;
  let left = low;
  let right = high - 1;

  while (true) {
    while (left <= right && array[left] < array[pivot]) left++;
    while (right >= left && array[right] > array[pivot]) right--;
    if (left >= right) break;

    [array[left], array[right]] = [array[right], array[left]];
    left++;
    right--;
  }

  [array[left], array[pivot]] = [array[pivot], array[left]];
  return left;
};

//Sort;
const QuickSort = (array, left, right) => {
  if (left >= right) {
    return;
  } else {
    let pivot = Partition(array, left, right);
    QuickSort(array, left, pivot - 1);
    QuickSort(array, pivot + 1, right);
  }
};

//////////////////////////////////////////////////
//Merge sort
//Merge
function Merge(left, right) {
  let arr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  return [...arr, ...left, ...right];
}

//Sort
function MergeSort(array) {
  const half = array.length / 2;

  if (array.length < 2) {
    return array;
  }

  const left = array.splice(0, half);
  return Merge(MergeSort(left), MergeSort(array));
}

/***********************************************/
//Tests;
let array = [3, 7, 2, 4, 0, 5, 4];
BubbleSort(array);
console.log(`Bubble sort:     ${array}`);

array = [3, 7, 2, 4, 0, 5, 4];
InsectionSort(array);
console.log(`Insection sort:  ${array}`);

array = [3, 7, 2, 4, 0, 5, 4];
SelectionSort(array);
console.log(`Selection sort:  ${array}`);

array = [3, 7, 2, 4, 0, 5, 4];
QuickSort(array, 0, array.length - 1);
console.log(`Quick sort:      ${array}`);

array = [4, 8, 7, 2, 11, 1, 3];
console.log(MergeSort(array));
