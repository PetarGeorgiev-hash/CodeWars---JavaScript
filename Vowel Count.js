function getCount(str) {
  let count = 0;
  for (i = 0; i < str.length; i++) {
    switch (str[i]) {
      case `a`:
        count++;
        break;
      case `e`:
        count++;
        break;
      case `i`:
        count++;
        break;
      case `o`:
        count++;
        break;
      case `u`:
        count++;
        break;
    }
  }
  return count;
}
