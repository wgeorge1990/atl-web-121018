# Intro to Object Orientation

## Objectives

* Define `object` in programming domain
* Explain the concept of sending messages
* Create a class and make an instance of the class
* Explain the difference between the class and an instance
* Pass arguments to `new` by defining an initialize method in class
* Create instance methods
* Know instance variables can only be seen by an object or its methods

### Timeline







* Everything in ruby is an object.
  * How do we tell what kind of object something is?
  * How do we know what we can do with a particular object?
* Dig into method dispatch a bit, look at `send`. (Maybe with `+` or `[]`?)
* Create a simple example class `Student` in a separate file.
* That class is boring! Add an instance method.
* This thing doesn't store any data. Let's change that!
  * Maybe a `set_name` method that stores stuff in an instance var?
* Oh no! We can't get the information out!  Ahhhhh.
  * Talk about reader methods and instance variable scope.
* It seems silly to be setting the name later, let's define an initializer.
  * What attributes should a student have? (see deliverables below)
* What else should a student be able to do?

If there is time:
  * See an example with nested objects?
  * Potentially introduce self?
  * Look at `attr_` methods

Summing up:
  * Everything in ruby is an object.
  * Objects give us a way to organize our code and create "seams" in our application since we can use an object without knowing how it works "on the inside".

## Deliverables

Let's look at a basic example of a student:

```ruby
student = { name: "brit", age: 32, subject: "ruby",
            labs: ['kickstarter', 'banking'] }
```

* can create a student
* can greet a friend
* can read a student's name, age, subject
* students can be assigned a lab
* students can complete a lab
* students can pair on a lab (they both have it checked off)
