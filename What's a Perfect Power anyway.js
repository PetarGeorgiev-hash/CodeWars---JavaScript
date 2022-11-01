var isPP = function (n) {
  for (m = 2; m <= n; m++) {
    for (i = 0; i <= n; i++) {
      if (n == Math.pow(i, m)) {
        return [i, m];
      }
    }
  }

  return null; // fix me
};
