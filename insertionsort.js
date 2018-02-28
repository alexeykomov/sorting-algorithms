function insertionSort(aInput) {
  const output = [...aInput];

  for (let counter = 1; counter < output.length; counter++) {
    const itemInQuestion = output[counter];
    let newIndexToPlace = counter;
    let sortedIndex = counter - 1;
    while (sortedIndex >= 0 && itemInQuestion < output[sortedIndex]) {
      output[sortedIndex + 1] = output[sortedIndex];
      newIndexToPlace = sortedIndex;
      sortedIndex--;
    }

    if (newIndexToPlace != counter) {
      output[newIndexToPlace] = itemInQuestion;
    }
  }

  return output;
}

console.log(insertionSort([18, 3, 4, 2, 1, 20, 13]));
console.log(insertionSort([3, 1]));
