## Morning!


I know we've thrown a lot of big concepts at you recently.
But also remember why you're here.

Hint: Computers are [magical](https://raw.githubusercontent.com/tiy-atl-js-jan-2017/slides/master/images/magic.gif)




## Recap

Brief recap! Yesterday we saw:

* Classes
* Instances
* Methods
* Instance Variables

At first it can be easy for these things to get mixed up.
It's not hard to confuse classes and instances and methods.

Keep in mind there are three main things we do with classes:

1. Define new classes: `class Student ... end`
2. Build instances to use: `randy = Student.new(...)`
3. Call methods on those instances and pass them as arguments:
  * `randy.writeCode('ruby')`
  * `brit.teach(randy)`

## Today

Cool! Today we're going to:

* Learn about self
* Learn the difference between class methods and instance methods
* Try to model relationships between objects (using trainers and pokemon)

* Practice writing classes - A pokemon trainer
  * What can a trainer do?
  * How can we tell two trainers apart? What if they have the same data?
  * How do we `require` both classes so we can use them together?
  * What relationships do trainers have to our other classes?
    * 1-to-many (1 trainer has many pokemon, every pokemon belongs to 1 trainer)


* How should pokemon be related to trainers?
  * We probably need a class variable for this!
  * What do we do if there are two trainers with the same name? How can we tell them apart or make them unique?

* Who is in charge of knowing about the relationship between a trainer and a pokemon?
