function isPrime(num) {
  if (num > 1) {
    for (i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
