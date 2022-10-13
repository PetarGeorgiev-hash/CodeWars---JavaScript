function twoSum(numbers, target) {
  for (i = 0; i < numbers.length; i++) {
    for (y = 0; y < numbers.length; y++) {
      if (i != y) {
        if (numbers[i] + numbers[y] == target) {
          return [i, y];
        }
      }
    }
  }
}
