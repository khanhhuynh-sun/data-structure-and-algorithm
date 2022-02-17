const fibonaci1 = (n) => {
  if (n <= 2) {
    return 1;
  } else {
    return fibonaci(n - 1) + fibonaci(n - 2);
  }
};

for (let i = 1; i <= 9; i++) {
  console.log(fibonaci(i));
}

const fibonaci2 = (n) => {
  let sum = 0;
  let n1 = 1;
  let n2 = 1;
  let i = 2;
  if (n === 1 || n === 2) {
    return 1;
  }
  while (i < n) {
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
    i++;
  }
  return sum;
};

for (let i = 1; i <= 8; i++) {
  console.log(fibonaci1(i));
}
