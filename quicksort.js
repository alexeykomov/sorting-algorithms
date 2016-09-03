function quickSort(aInput, aLeftIndex, aRightIndex) {
  if (aInput.length > 1) {
    const delimeter = partition(aInput, aLeftIndex, aRightIndex);
    if (aLeftIndex < delimeter - 1) {
      quickSort(aInput, aLeftIndex, delimeter - 1);
    }
    if (delimeter < aRightIndex) {
      quickSort(aInput, delimeter, aRightIndex);
    }
  }
}

function partition(aArray, aLeftIndex, aRightIndex) {
  let counterFromLeft = aLeftIndex;
  let counterFromRight = aRightIndex;
  let pivot = aArray[aLeftIndex + Math.floor((aRightIndex - aLeftIndex) / 2)];

  while (counterFromLeft <= counterFromRight) {
    while (aArray[counterFromLeft] < pivot) {
      counterFromLeft++;
    }
    while (aArray[counterFromRight] > pivot) {
      counterFromRight--;
    }
    if (counterFromLeft <= counterFromRight) {
      swap(aArray, counterFromLeft, counterFromRight);
      counterFromLeft++;
      counterFromRight--;
    }
  }
  return counterFromLeft;
}

function swap(aArray, aLeftIndex, aRightIndex) {
  const temp = aArray[aLeftIndex];
  aArray[aLeftIndex] = aArray[aRightIndex];
  aArray[aRightIndex] = temp;
}

const array = [10, 2, 12, 2, 32, 2, 12, 3, 2];
quickSort(array, 0, array.length - 1);
console.log(array);