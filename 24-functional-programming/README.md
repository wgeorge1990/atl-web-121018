## Intro to Functional Programming

I just hit the motherfucking free square in Bingo. 😎 🔥


### Objectives












#### Section 1 - What is FP?

* Know why programmers care about "Functional Programming"
  * Know what makes a function "pure"
  * Know what a "side effect" is

#### Section 2 - Recursion

(because loops ain't pure y'all 👀 😱)

* Talk about using recursion to solve simple problems
  * First factorial, then Pascal's triangle?
  * Talk about stack growth and TCO
  * Algorithmic complexity: Time and Space

#### Section 3 - Higher Order Functions 💪 ✨

* Make a higher order function "product" that generates the product of a
  range of numbers from start to end. `product(a, b, term, next, result=1)`
  * Now define factorial in terms of `product`.

#### Section 4 - Dealing with Sequences

* Problems:
 * Count number of items in an array using reduce.
 * Implement reversing an array recursively.

* Emcien Dev test problems:
  * Let S be the set of numbers greater than zero and less than 100,000 that
    are evenly divisible by 19.
  * How many numbers are there in S?
  * How many numbers in S have a square that ends in a 1?

#### Section 5 - Making a Sequence

* See how to use closures to make a new data structure using _only_ functions
  * Let's make pairs!

### IMPORTANT NOTE

None of this will be on the Mod 3 or Mod 4 exams.

### Why should I care?

> The importance ... is that it allows the programmer and the compiler to reason
> about program behavior as a rewrite system. This can help in proving
> correctness, simplifying an algorithm, assisting in modifying code without
> breaking it, or optimizing code by means of memoization, common subexpression
> elimination, lazy evaluation, or parallelization.

Basically, it makes programs easier to reason about.
You can use the "Substitution Model".





### Pure functions

Pure functions are functions that have no side effects.
Pure functions should always return the same result for the same input.

Pure functions exhibit a property sometimes called "referential transparency".

> So long as we do not use assignments, two evaluations of the same
> procedure with the same arguments will produce the same result, so
> that procedures can be viewed as computing mathematical functions.

### Side Effects

* Modifying any external variable or object property
* Logging to the console
* Writing to the screen
* Writing to a file
* Writing to the network
* Triggering any external process
* Calling any other functions with side-effects

### Recursion vs Iteration

Recursion is when a function calls itself.
Make sure you've got a base case! 🛑👮‍

> A recursive process slowly expands in resource usage by building a chain of
> deferred operations. It then contracts whenever the recursion "bottoms out".
> Note that in a tree recursive process, this can lead to repeating expansions
> and contractions until the full tree is traversed. In most languages
> (and for non-tail recursive programs) this is reflected by call stack growth.

> An iterative process can have its state summarized by a fixed number of
> variables which completely capture the progress at any point. Interestingly,
> that would give us a simple way to stop and resume processes if we could only
> externally interrupt a function and save its active state.

Tail Call Optimization or TCO is a feature of some programming languages that
prevents recursive functions from consuming space on the stack!
