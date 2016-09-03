function selectionSort(aInput) {
  const output = [...aInput];
  for (let padding = 0; padding < output.length; padding++) {
    let minimal = output[padding];
    let minimalIndex = padding;
    for (let counter = padding + 1; counter < output.length; counter++) {
      if (output[counter] < minimal) {
        minimal = output[counter];
        minimalIndex = counter;
      }
    }
    if (minimal != output[padding]) {
      swap(output, padding, minimalIndex);
    }
  }
  return output;
}

function swap(aArray, aIndexPrev, aIndexNext) {
  const temp = aArray[aIndexPrev];
  aArray[aIndexPrev] = aArray[aIndexNext];
  aArray[aIndexNext] = temp;
}

console.log(selectionSort([18, 3, 4, 6, 1, 3, 2, 10, 3, 1]));
