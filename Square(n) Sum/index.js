function squareSum(numbers) {
  let total = 0;
  numbers.forEach((number) => {
    total += Math.pow(number, 2);
  });

  return total;
}
