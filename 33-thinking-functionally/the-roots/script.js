/*

Newton's Method of Approximating Square Roots
  sqrt(x) is the y such that y>0 and y^2 == x

* Start with a guess for the square root
* If the guess squared is within 0.001 of x, we're done!
* Otherwise, improve the guess: average(guess, x/guess)
* Keep improving until guess is satisfactory.


*/

class Rooter {
  constructor(x) {
    this.target = x;
    this.guess = 1.0;
  }

  findSqrt() {
    let distance = Math.abs(this.target - this.guess ** 2)
    while (distance > 0.001) {
        this.guess = (this.guess + this.target / this.guess) / 2
        distance = Math.abs(this.target - this.guess ** 2)
    }
    return this.guess;
  }

}

// const findRoot = (x, guess) => {
//   if (closeEnough(x, guess)) {
//     return guess;
//   } else {
//     return findRoot(x, sqrtImprove(x, guess))
//   }
// }

/* The functional approach to reuse:

  I've written a function that continously improves a guess
  until it is a good approximation of a sqrt. Now my boss
  tells me he needs to do the same thing for cube roots, nth roots,
  and the golden ratio. My boss is a jerk!

  Anyway, the _general method_ still works mathematically to get
  answers for all those things. The specifics just change about
  how to check if a guess is good enough and improve it if needed.

  Okay, so we'll write a function that takes as arguments:
    * a test() that takes the number to solve and current guess and checks it
    * a improve() that takes the number and the guess and makes a better guess
  Then that function will return a function that takes the number to solve, x,
  and _continuously improves its guess_. Now I can build a squareRoot function
  or cubeRoot function and so on on the fly!
*/

const continuouslyImprove = (test, improve, startingGuess=1.0) => {
  let fun = (x, guess=startingGuess) => {
    if (test(x, guess)) {
      return guess
    } else {
      let newGuess = improve(x, guess)
      return fun(x, newGuess)
    }
  }
  return fun
}

const sqrtClose   = (x, guess) => Math.abs(x - guess ** 2) < 0.001
const sqrtImprove = (x, guess) => (guess + x / guess) / 2

const curtClose = (x, guess) => Math.abs(x - guess ** 3) < 0.001
const curtImprove = (x, guess) => (guess + x / guess ** 2) / 2

let findSqrt = continuouslyImprove(sqrtClose, sqrtImprove, 1.0)
let findCurt = continuouslyImprove(curtClose, curtImprove, 1.0)

/*

const myReducer = (oldState, action) => {
  switch(action.type) {
    case "INCREMENT": {
      return { ...oldState, count: oldState.count + 1 }
    }
    case "DECREMENT": {
      return { ...oldState, count: oldState.count - 1 }
    }
  }
}

*/


/*
Example of a redux render:

  render() {
    <Semantic.Container>
      <Navbar />
      <UserProfile />
      <Footer />
    </Semantic.Container>
  }


*/
