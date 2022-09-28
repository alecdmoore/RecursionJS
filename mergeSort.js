/**
 * MergeSort Algorithm
 * @param {array} arr
 * @returns Sorted array
 */
function mergeSort(arr) {
  if (arr.length < 2) return arr;

  //sort left half of the array
  const left = arr.slice(0, Math.floor(arr.length / 2));

  //sort right half of the array
  const right = arr.slice(Math.floor(arr.length / 2), arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

/**
 * Function to join two arrays together
 * @param {array} arr1 left half array
 * @param {array} arr2 right half array
 * @returns
 */
function merge(arr1, arr2) {
  const result = [];

  let right = 0;
  let left = 0;

  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] < arr2[right] || arr1[left] == arr2[right]) {
      result.push(arr1[left]);
      left++;
    } else if (arr1[left] > arr2[right]) {
      result.push(arr2[right]);
      right++;
    }
  }

  while (left < arr1.length) {
    result.push(arr1[left]);
    left++;
  }

  while (right < arr2.length) {
    result.push(arr2[right]);
    right++;
  }
  //   console.log(result);
  return result;
}

// console.log(mergeSort([8, 5, 7, 1, 4, 3, 2, 6]));
// console.log(mergeSort([23, 33, 44, 6, 43, 9, 2]));
console.log(mergeSort([23, 33, 44, 5, 7, 1, 4, 3, 2, 6, 43, 2]));
