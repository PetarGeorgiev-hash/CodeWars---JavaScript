var isSquare = function (n) {
  if (n >= 0) {
    const sqrt = Math.floor(Math.sqrt(n));
    return sqrt * sqrt == n;
  }
  return false;
};
