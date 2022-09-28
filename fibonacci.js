// Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence. Using an example input of 8, this method should return the array [0, 1, 1, 2, 3, 5, 8, 13].

function iterFib(num) {
  let arr = new Array();
  for (let i = 0; i < num; i++) {
    i == 0
      ? arr.push(0)
      : i == 1
      ? arr.push(1)
      : i == 2
      ? arr.push(1)
      : arr.push(arr[i - 1] + arr[i - 2]);
  }
  console.log(arr);
}

iterFib(8);

// Now write another method fibsRec which solves the same problem recursively. This can be done in just a couple of lines (or 1 if you’re crazy, but don’t consider either of these lengths a requirement… just get it done).

function fibsRec(num) {
  //base case
  if (num < 2) return num;

  return fibsRec(num - 1) + fibsRec(num - 2);
}

console.log(fibsRec(8));
