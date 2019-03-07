## The factored version

```
function averageDamp (fn) {
    return (x) => (x + fn(x)) / 2
}
// const averageDamp = (fn) => (x) => (x + fn(x)) / 2

function fixedPoint(improve, guess) {
  const satisfied = (v1, v2) => Math.abs(v1 - v2) < 0.0001
  while !satisfied(guess, improve(guess)) {
    guess = improve(guess);
  }
  return guess;
}

function fixify (fn, transform, guess) {
  return (x) => fixedPoint(transform(fn), guess)
}
// const fixify = (fn, transform, guess) => (x) => fixedPoint(transform(fn), guess)

const sqrt = fixify(guess => x / guess, averageDamp, 1.0)
const curt = fixify(guess => x / Math.exp(guess, 2), averageDamp, 1.0)
```
