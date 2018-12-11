## Cosmicomics: A Data Structure Story

### SWBATs

* Do basic File I/O (reading)
* Trace data flow in nested loops
* Make simple estimates about program performance/runtime behavior
* Recognize when additional structure makes hashes preferable











### Motivation

* Learning programming is tough. There's too much useful software!
  * (I.e. Finding small but useful problems to solve is tricky.)
* I was reading a book called "Real World Haskell" in 2009
  about a _really funky_ programming language.
* They had a code example mentioning "Cosmicomics" by Italo Calvino.
* I thought Cosmicomics was a "cute" word and wondered how many
  combinations like that might be in common english.
* So I wrote a program to find them all. Today, we will reproduce it.
* We'll may hit some performance problems and try to solve then.


## Why was it slow?

* Nested loops - with a wordlist of 10000
  * outer loop runs 10000 times
    * inner loop runs 10000 times to test with special pair
  * so our program runs special_pair? and the inner loop 100 million times

## Performance advice

NOTE: Only do this once it's correct and you can read it without crying.

2 ways to make a program fast:

1. Make it do the work slightly faster by finding faster loops or merging functions together. (Micro-optimization)
2. Make it do less work. (This is vastly preferred.)

Lots of pairs are tested that don't need to be.
Particularly words of different lengths don't need to be checked.

### Functional Tasks

* Determine if two words are anagrams
* Determine if two words can be joined by a common letter
* Determine if a word is "special"
* Read a file to build a "dictionary" or word list
* Search all useful combinations of words to find and print special words
