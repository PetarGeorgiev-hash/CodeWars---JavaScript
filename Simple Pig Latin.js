function pigIt(str) {
  const splittedStrArr = str.split(" ");
  let piggedArr = [];
  let pattern = /[a-zA-z]/;
  splittedStrArr.forEach((element) => {
    if (pattern.test(element)) {
      const firstChar = element[0];
      const slicedWord = element.substring(1);
      piggedArr.push(slicedWord + firstChar + "ay");
    } else {
      piggedArr.push(element);
    }
  });
  return piggedArr.join(" ");
}
