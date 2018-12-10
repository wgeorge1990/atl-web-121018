# Hashketball Review

## Objectives

* Ruby Data Types
* Array methods
  * `#each`
  * returns the original array
  * `#map`
  * `#select`
  * `#find`
  * returns first element that 'makes the block true' or nil


* TDD
  * `rspec --fail-fast` handle one error at a time
  * Red, Green, Refactor
  * Make it work (shameless green), make it right, make it fast


* Intentional Debugging
  * Error messages and test failures
  * Recognize when to use `puts` and when to use `binding.pry`
  * Google 'Docs'


## Outline

-  Working with the spec and intro to TDD
-  Intentional Debugging
-  puts vs pry
-  code tracing (scope and types)
-  reading error messages
-  googling effectively


-  Git flow (see a merge conflict)


## Questions
-X Atom and local machine development vs. learn IDE
- "It works but it just looks weird" - aesthetics
   - "idiomatic"
- When to use `puts` and when to use `binding.pry`?
- return values, `puts` vs `return`?
- `end.something`????? Wat.
- Why arrays or hashes?
  - arrays are easier to iterate over
  - hashes are good for data with some structure

**Bonus Questions:**

Define methods to return the answer to the following questions:

1. Which player has the most points? Call the method `most_points_scored`.

2. Which team has the most points? Call the method `winning_team`.

3. Which player has the longest name? Call the method `player_with_longest_name`.

**Super Bonus:**

1. Write a method that returns true if the player with the longest name had the most steals. Call the method `long_name_steals_a_ton?`.
