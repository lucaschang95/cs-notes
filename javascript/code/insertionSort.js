function insertionSort(arr) {
  const array = arr.slice();
  for (let i = 1; i < arr.length; i++) {
    let temp = i;
    while (temp > 0 && array[temp - 1] > array[temp]) {
      exchange(array, temp - 1, temp);
      temp--;
    }
  }
  return array;
}

function exchange(arr, lo, hi) {
  const temp = arr[lo];
  arr[lo] = arr[hi];
  arr[hi] = temp;
}

console.log(insertionSort([1, 9, 2, 5, 4]));