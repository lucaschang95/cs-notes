function quickSort(arr) {
  let array = arr.slice();
  
  if (array.length <= 1) {
    return array;
  }

  const lo = [], hi = [];
  const refValue = array[0];
  for (let i = 1; i < array.length; i++) {
    const tempValue = array[i];
    if (tempValue >= refValue) {
      hi.push(tempValue);
    } else {
      lo.push(tempValue);
    }
  }
  return quickSort(lo).concat(refValue, quickSort(hi));

}