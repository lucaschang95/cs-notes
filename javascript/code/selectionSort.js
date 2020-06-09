function selectionSort(arr) {
  let array = arr.slice();
  for (let i = 0; i < array.length - 1; i++) {
    let minValue = array[i],minIndex = i;
    for (let j = i; j < array.length; j++) {
      let temp = array[j];
      if (temp < minValue) {
        minValue = temp;
        minIndex = j;
      }
    }
    if (i !== minIndex) exchange(array, i, minIndex);
  }
  return array;
}

function exchange(arr, lo, hi) {
  const temp = arr[lo];
  arr[lo] = arr[hi];
  arr[hi] = temp;
}

console.log(selectionSort([1, 9, 2, 5, 4]));