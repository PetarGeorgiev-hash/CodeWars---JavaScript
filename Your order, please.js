function order(words) {
  const splittedWords = words.split(" ");
  let orderedArr = [];

  for (i = 0; i < splittedWords.length; i++) {
    for (y = 1; y < 10; y++) {
      if (splittedWords[i].includes(y)) {
        orderedArr[y - 1] = splittedWords[i];
      }
    }
  }

  return orderedArr.join(" ");
}
