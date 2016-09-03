function insertionSort(aInput) {
  const output = [...aInput];

  for (let counter = 1; counter < output.length; counter++) {
    const itemInQuestion = output[counter];
    let newIndexToPlace = counter;
    for (let sortedIndex = counter - 1; sortedIndex >= 0; sortedIndex--) {
      if (itemInQuestion < output[sortedIndex]) {
        output[sortedIndex + 1] = output[sortedIndex];
        newIndexToPlace = sortedIndex;
      }
    }
    if (newIndexToPlace != counter) {
      output[newIndexToPlace] = itemInQuestion;
    }
  }

  return output;
}

console.log(insertionSort([18, 3, 4, 2, 1, 20, 13]));
console.log(insertionSort([3, 1]));
