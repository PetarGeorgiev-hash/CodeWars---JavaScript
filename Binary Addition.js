function addBinary(a, b) {
  let total = a + b;
  let arr = [];
  let result = "";

  while (total != 0) {
    if (total % 2 == 0) {
      arr.push("0");
    } else {
      arr.push("1");
    }
    total = Math.floor(total / 2);
  }
  arr.reverse();
  arr.forEach((number) => {
    result += number;
  });
  return result;
}
