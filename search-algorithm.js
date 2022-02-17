//////////////////////////////////////////////////
//Linear search;
const LinearSearch = (array, target) => {
  for (const i in array) {
    if (array[i] == target) return i;
  }
  return -1;
};

//////////////////////////////////////////////////
//Binary search;
const BinarySearch = (array, target) => {
  let left = 0;
  let right = array.length - 1;
  let mid = 0;

  while (left <= right) {
    mid = left + (right - left) / 2;

    if (array[mid] == target) {
      return mid;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else if (array[mid] > target) {
      right = mid - 1;
    }
  }

  return -1;
};

//////////////////////////////////////////////////
//Ternary search;
const TernarySearch = (array, target) => {
  let left = 0;
  let right = array.length - 1;

  while (right - left >= 0) {
    let partition = parseInt((right - left) / 3);
    let firstMid = left + partition;
    let secondMid = right - partition;

    if (array[firstMid] == target) {
      return firstMid;
    } else if (array[secondMid] == target) {
      return secondMid;
    } else if (array[firstMid] < target && array[secondMid] > target) {
      left = firstMid + 1;
      right = secondMid - 1;
    } else if (array[firstMid] > target) {
      right = firstMid - 1;
    } else if (array[secondMid] < target) {
      left = secondMid + 1;
    }
  }

  return -1;
};

//////////////////////////////////////////////////
//Interpolation search;
const InterpolationSearch = (array, target) => {
  let left = 0;
  let right = array.length - 1;
  let mid = 0;

  while (left <= right) {
    mid =
      (left + (right - left) * (target - array[left])) /
      (array[right] - array[left]);

    mid = parseInt(mid);
    if (array[mid] == target) {
      return mid;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else if (array[mid] > target) {
      right = mid - 1;
    }
  }
  // 0 1 2 3 4  5  6  7  8  9      9 * 16 / 18
  // 2 4 6 8 10 12 14 16 18 20
  return -1;
};

//////////////////////////////////////////////////
//Jump search;
const JumpSearch = (array, target) => {
  let blockSize = parseInt(Math.sqrt(array.length - 1));
  let first = 0;
  let last = blockSize;

  while ((first < array.length - 1, array[last] < target)) {
    first = last;
    last += blockSize;
    if (last > array.length - 1) last = array.length - 1;
  }

  for (let i = first; i <= last; i++) {
    if (target == array[i]) {
      return i;
    }
  }
  return -1;
};

/***********************************************/
//Tests;
// array = [3, 7, 2, 4, 0, 5, 6];
// console.log(`Linear Search:       ${LinearSearch(array, 0)}`);

// array = [0, 2, 3, 4, 5, 6, 7];
// console.log(`Ternary Search:      ${TernarySearch(array, 2)}`);

const array = [0, 2, 3, 4, 5, 6, 7, 8];
console.log(`Binary Search:       ${BinarySearch(array, 4)}`);

// array = [0, 2, 3, 4, 5, 6, 7];
// console.log(`Interpolation Search:${InterpolationSearch(array, 7)}`);

// array = [0, 2, 3, 4, 5, 6, 7];
// console.log(`Jump Search:         ${JumpSearch(array, 6)}`);
