function descendingOrder(n) {
  if (n < 0) {
    return;
  } else {
    const numsArr = n;
    const newSortedNum = numsArr.sort(sortFn);
    return newSortedNum;
  }
}

function sortFn(a, b) {
  return b - a;
}
