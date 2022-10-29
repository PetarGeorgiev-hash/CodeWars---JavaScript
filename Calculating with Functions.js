function zero(x) {
  return x != null ? x(0) : 0;
}
function one(x) {
  return x != null ? x(1) : 1;
}
function two(x) {
  return x != null ? x(2) : 2;
}
function three(x) {
  return x != null ? x(3) : 3;
}
function four(x) {
  return x != null ? x(4) : 4;
}
function five(x) {
  return x != null ? x(5) : 5;
}
function six(x) {
  return x != null ? x(6) : 6;
}
function seven(x) {
  return x != null ? x(7) : 7;
}
function eight(x) {
  return x != null ? x(8) : 8;
}
function nine(x) {
  return x != null ? x(9) : 9;
}

function plus(x) {
  return (y) => y + x;
}
function minus(x) {
  return (y) => y - x;
}
function times(x) {
  return (y) => y * x;
}
function dividedBy(x) {
  return (y) => Math.floor(y / x);
}
