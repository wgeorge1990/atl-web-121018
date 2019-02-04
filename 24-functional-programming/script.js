var dog = {
  name: 'jurgen',
  likes: 40,
  appearance: 'mangy'
}

// Imperative style
function likeDog(dog) {
  dog.likes += 1;
  return dog;
}

// Functional style
function pureLikeDog(dog) {
  let newLikes = dog.likes + 1
  return Object.assign({}, dog, { likes: newLikes })
}

// A regular old for loop is imperative!
// for(let i = 0; i < 10; i++) { // i = i + 1
//   console.log(i);
// }

// Imperative factorial.
function factorial(n) {
  let result = 1;
  for(let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

// Recursive factorial
function factorialRec(n) {
  if (n === 1) {
    // Base case - when do I stop?
    return result;
  } else {
    // Recursive case - what next?
    console.log(`factorialRec(${n - 1}, ${result * n})`)
    return n * factorialRec(n - 1)
  }
}

function pascal(row, col) {
  if (row === 1) {
    return 1;
  } else if (col === 1 || col === row) {
    return 1;
  } else {
    console.log(`pascal(${row - 1}, ${col - 1}) + pascal(${row - 1}, ${col})`)
    return pascal(row - 1, col - 1) + pascal(row - 1, col);
  }
}


let nums = [1,2,3,4,5]
// Sequence Higher Order Functions / Enumerables
// each, forEach
// collect, map
// select, filter
// inject, reduce
// find, find

let squares = nums.map(x => x * x)
let greaterThanTen = squares.filter(x => x > 10)

let primes = [3, 5, 7, 13, 17, 29]
let total = primes.reduce((result, item) => {
  console.log(result, item)
  return result + item
})
