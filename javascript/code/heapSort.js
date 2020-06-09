/**
 * 
 * @param {*} arr
 * 1. build heap
 * 2. swap top and botton and rebuild heap
 * ... 
 */
function heapSort(arr) {
  buildHeap(arr);
  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    sink(arr, 0);
  }
  return arr;
}

function buildHeap(arr) {
  if (arr.length === 0) return [];
  for (let i = Math.ceil(arr.length / 2); i >= 0; i--) {
    sink(arr, i);
  }
}

function sink(arr, i) {
  const left = 2 * + 1;
  const right = 2 * + 2;
  let largest = i;
  if (left < arr.length && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < arr.length && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest !== i) {
    swap(arr, i, largest);
    sink(arr, largest);
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}