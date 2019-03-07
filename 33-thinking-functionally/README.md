## Thinking Functionally with Redux


This lecture will have 2 segments.


In the first half, we'll look at the differences between
functional and object oriented approaches to problem solving.

In the second half, we'll talk about what's been hard so far
about React and what Redux tries to do to fix those issues.












### Part 1: Functional Problem Solving 💪

* History of FP (5 minutes)
  * CompSci came from Mathematics (pre-1950s)
  * Computer Scientists wanted to think about programming mathematically
    * Programming functions so far aren't "mathematical" functions...
      * x = x + 1 makes no sense in math
      * mathematical functions don't modify their inputs, just make outputs
  * This is nice because it helps you *simplify* code.
  * All computers do is just rewrite/simplify code until there's an answer...


* Discuss Functional Principles below (5 minutes)
  * Note: Certain FP innovations are mainstream now - esp. map, filter, reduce
* Example: Newton's Method of Approximating Square Roots (10 minutes)
  * Let's write a class to implement this.
  * Okay, now let's see a functional way to do the same thing.





* Okay, can we extend this general method to other problems?
  * cube roots? same thing but average(guess, x/guess^2)
  * golden ratio? same thing but average(guess, 1+1/guess)
  * nth roots? ain't nobody got time for that* [jk, i do][nth-roots] 😂
* Factored: const sqrt = fixedPointTransform(sqrtImprove, averageDamp, guess)

[nth-roots]: https://gist.github.com/kingcons/8071c6a214bc82d09be398250d9b3953



#### Functional Principles

* Programming should be amenable to mathematical reasoning.
  * Historical perspective: Programs should describe the solution,
    not the exact steps to compute it efficiently in a particular way.
* Composition of small pieces is the best way to build complicated systems.
* Mutable State (i.e. assignment) is a deep source of problems in programming.
  * It prevents equational or algebraic reasoning. That is, if you use it:
    * You can't substitute the value of functions or variables.
    * You can't rely on functions returning the same output for a given input.
  * Bugs dependent on specific state changes are hard to find and reproduce.








### Part 2: Redux All The Things! 🎉

First things first, what are some things you've found hard about React?

* Setting state on a parent from a child component
* First render where the state isn't there yet
* State is needed everywhere, passing props like crazy
* Refactoring is very hard, changing components means moving state all over
  * Thought state could go in children, but it seems to move up until
    everything in App


Okay, so Redux is designed with _Functional Principles_ in mind.
So it breaks things up in a way that may seem counterintuitive.

The _objective_ of Redux is for you to be able to build a function
that you pass your component into, that gives back a new component
with all the props and callbacks it needs.
* No more manual prop passing!
* No more manual state manipulation!

Here are the parts:
* Create a **store**, a single global place where all state is kept.
  * _You cannot modify its state!_ You can only build a new state to replace it.
* Write a **reducer function** that takes the state and builds its successor.
  * To know how to build the new state, we need to know what is changing.
  * For that, we use **actions**. Just a JS object with a "type" property.
* We cannot run the reducer directly, instead we call **dispatch** on the store.
  * We pass **dispatch** the action describing the change we want.
  * This runs the **reducer** to produce the new state and updates the store.

We'll get more practice with all of that this afternoon. 😎
Don't panic! Just take it one step at a time. 🙇‍ ❤️

[Slides]: https://docs.google.com/presentation/d/1IIzo1y-nHkQEGtEhDiq7NevbTipq0jGj9XjOs4hLE9Q/edit#slide=id.g342b7ede26_0_19
[Functional Library, reducer edition]: https://github.com/learn-co-students/js-functional-library-project-atlanta-web-career-121018/tree/brits-version
