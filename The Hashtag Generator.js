function generateHashtag(str) {
  let finalStr = `#`;
  const arr = str.split(new RegExp(` `));
  console.log(arr);
  arr.forEach((word) => {
    if (word != "") {
      for (i = 0; i < word.length; i++) {
        if (i == 0) {
          finalStr += word[i].toUpperCase();
        } else {
          finalStr += word[i];
        }
      }
    }
  });
  if (finalStr.length > 140 || finalStr == `#`) {
    return false;
  } else {
    return finalStr;
  }
}
