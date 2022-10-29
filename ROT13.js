function rot13(str) {
  let finalStr = "";
  let finalArr = [];
  const splittedStr = str.split(" ");
  splittedStr.forEach((word) => {
    debugger;
    let wordStr = "";
    for (i = 0; i < word.length; i++) {
      const char = word[i];
      if (isChar(char)) {
        if (isLowerCase(char)) {
          const ascii = char.charCodeAt(0);
          if (ascii == 122 || ascii + 13 > 122) {
            const newChar = String.fromCharCode(
              char.charCodeAt(0) + 13 - 122 + 96
            );
            wordStr += newChar;
          } else {
            const newChar = String.fromCharCode(char.charCodeAt(0) + 13);
            wordStr += newChar;
          }
        } else {
          const ascii = char.charCodeAt(0);
          if (ascii == 90 || ascii + 13 > 90) {
            const newChar = String.fromCharCode(
              char.charCodeAt(0) + 13 - 90 + 64
            );

            wordStr += newChar;
          } else {
            const newChar = String.fromCharCode(char.charCodeAt(0) + 13);

            wordStr += newChar;
          }
        }
      } else {
        wordStr += char;
      }
    }
    finalArr.push(wordStr);
  });

  return finalArr.join(" ");

  function isLowerCase(char) {
    if (char.toLowerCase() === char) {
      return true;
    } else {
      return false;
    }
  }

  function isChar(char) {
    if (typeof char !== `string`) {
      return false;
    } else {
      return /[a-zA-Z]/.test(char);
    }
  }
}
