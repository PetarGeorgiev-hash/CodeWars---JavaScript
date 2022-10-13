function bouncingBall(h, bounce, window) {
  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    let visable = h * bounce;
    let seen = 1;
    while (visable > window) {
      visable = visable * bounce;
      seen += 2;
    }
    return seen;
  } else {
    return -1;
  }
}
