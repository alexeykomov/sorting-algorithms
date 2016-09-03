function mergeSort(aInput) {
  if (aInput.length == 0 || aInput.length == 1) {
    return [...aInput];
  } else {
    const middleIndex = Math.floor(aInput.length / 2);
    return merge(mergeSort(aInput.slice(0, middleIndex)),
        mergeSort(aInput.slice(middleIndex)));
  }
}

function merge(aLeftArray, aRightArray) {
  let counterLeft = 0;
  let counterRight = 0;
  let result = [];
  while (counterLeft < aLeftArray.length && counterRight < aRightArray.length) {
    if (aLeftArray[counterLeft] < aRightArray[counterRight]) {
      result.push(aLeftArray[counterLeft]);
      counterLeft++;
    } else {
      result.push(aRightArray[counterRight]);
      counterRight++;
    }
  }
  return result.concat(aLeftArray.slice(counterLeft)).concat(aRightArray.slice(
      counterRight));
}

console.log(mergeSort([17, 2, 3, 1, 5, 2, 12, 1]));
