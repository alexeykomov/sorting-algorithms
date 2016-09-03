function bubbleSort(aInput) {
  const output = [...aInput];
  for (let padding = 0; padding < output.length; padding++) {
    for (let counter = 1; counter < output.length - padding; counter++){
      const prev = output[counter - 1];
      const next = output[counter];
      if (prev > next) {
        swap(output, counter - 1, counter);
      }
    }
  }
  return output;
}

function swap(aArray, aPrevIndex, aNextIndex) {
  const temp = aArray[aPrevIndex];
  aArray[aPrevIndex] = aArray[aNextIndex];
  aArray[aNextIndex] = temp;
}

console.log(bubbleSort([8, 1, 3, 4, 5]));
