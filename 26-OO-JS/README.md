# Object-Oriented JS And Prototype Chain 

## Outline

- Understand the benefits of sharing properties and behavior
- Answer (**Why?**)
  - Why is inheritance/sharing useful?
  - What are we sharing?
- **How it works?**
  - Understand the `Prototype Chain`
  - Create objects using `new` and `Constructor` functions
  - `new` 
- **How we will likely use it?**
  - Classes (syntactic sugar on the `prototype chain`)
  - Refactor constructor to adopt the class syntax

### Object-Oriented Javascript 

* What _problem_ are we solving? 
So far we have been able to create functional front end apps that are interactive using functional programming in JS! Why would I ever need anything else! 

- using object literals to store key, value pairs
- separating our logic by functions
- not yet created an Object model and several reproductions(instances) of that model

* What if we need several instances, versions of a particular type of model? 
_Example: 20 characters in a story, we want to write one model for a character, and specify details for each one when they are created_

### Object Literals
```js 
character1 = {name:"Louise", age: "23" favorite_food: "pizza"}
character2 = {name:"Maria", age: "51" favorite_food: "pasta"}
character3 = {name:"Henry", age: "45" favorite_food: "soda"}
```
_this could take forever!_ 

### Factory Functions

```js
function createCharacter(name, age, favorite_food){

  let obj = {name, age, favorite_food}
  obj.introduce= ()=> {

    return `Hey! My name is ${obj.name}, and I like ${obj.favorite_food}
  }
  return obj
}

const susan = createCharacter("Susan", 14, "sushi")
const jamal = createCharacter("Jamal", 15, "icecream")

```

_Unfortunately I am creating a redefining the introduce function everytime I create an object_ 
_try jamal.introduce === susan.introduce_

### Constructor Functions

```js
function Character(name, age, favorite_food){
  this.name = name
  this.age = age
  this.favorite_food 

  this.introduce = function(){

    return `Hey! My name is ${this.name}, and I like ${this.favorite_food}
  }

}

const farah = new Character("Farah", 43, "milkshakes")
```

A few notes on the `new` operator:

>  When the code `new Foo(...)` is executed, the following things happen:
>
  > 1.  A new object is created, inheriting from `Foo.prototype`.
>
  > 2. The constructor function `Foo` is called with the specified arguments, and with `this` bound to the newly created object. `new Foo` is equivalent to `new Foo()`, i.e. if no argument list is specified, Foo is called without arguments.
>
  > 3. The object returned by the constructor function becomes the result of the whole `new` expression. If the constructor function doesn't explicitly return an object, the object created in step 1 is used instead. (Normally constructors don't return a value, but they can choose to do so if they want to override the normal object creation process.)

### Object-Oriented Javascript
* What does it mean for a language to be Object-Oriented? 
- being able to create object models
- being able to create instances of those models
- being able to build models on top of one another

* Standards for being OO 
- polymorphic: several different instances or forms of one model
- encapsulation: hiding values or state to only be by it's "owner", scope
- inheritance: supported through prototyping

#### Prototypal Inheritance

- JavaScript however, **does not have classes**. Ruby has these special things called _classes_ that allow us to create blueprints for our instances. JavaScript relies on prototypal inheritance. In essence, almost everything in JavaScript is an object: functions, object literals, even arrays. JavaScript objects have a chain of prototypes; other objects that define certain _shared functionality_. If a method is not defined on a particular object, JavaScript will look _up the chain of prototypes_ (which are plain old JavaScript objects) until it either finds the method or errors out:
  - "When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain. Nearly all objects in JavaScript are instances of `Object` which sits on the top of a prototype chain." - [MDN Article on Inheritance and the Prototype Chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

#### What is a Prototype in JavaScript

- "JavaScript is often described as a prototype-based language — to provide inheritance, objects can have a prototype object, which acts as a template object that it inherits methods and properties from. An object's prototype object may also have a prototype object, which it inherits methods and properties from, and so on. This is often referred to as a prototype chain, and explains why different objects have properties and methods defined on other objects available to them.

- Well, to be exact, the properties and methods are defined on the prototype property on the Objects' constructor functions, not the object instances themselves.

- In JavaScript, a link is made between the object instance and its prototype (its `__proto__` property, which is derived from the prototype property on the constructor), and the properties and methods are found by walking up the chain of prototypes." - [MDN Article on Object Prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)

![chain](https://media.giphy.com/media/yvzK4m2EoIKs9K0GoF/giphy.gif)

_If we use Object.prototype we are no longer duplicating functions everytime an object is created out of that prototype!_ 
### ES6 Class Syntax 

```js
class Character(){

  constructor(name, age, favorite_food){
    this.name
    this.age
    this.favorite_food
  }

  introduce(){

    return `Hey! My name is ${this.name}, and I like ${this.favorite_food}
  }


}

const lamia = new Character("Lamia", 43, "bastella")
const jamal = new Character("Jamal", 15, "icecream")

Character.prototype.sayBye = function(){
  return "Goodbye!"
}
```
_try lamia.introduce === jamal.introduce_

### Keep in Mind

JavaScript splits the responsibility for instances into a constructor and a prototype. A constructor in JavaScript can be any function. Constructors are responsible for creating new instances.
This means that we have to think carefully about encapsulating variables in a "class"

* What if we wanted to ID our instances ?
```js
const Character = (() => {
  let totalCharactersMade = 1

  return class Character {
    constructor(name, ability) {
      this.name = name
      this.ability = ability
      this.id = totalCharactersMade++
    }

    refillHealth() {
      console.log(`${this.name} restored health!`)
    }
  }
})()

const character1 = new character('pong', 'a digital ping pong ball')
const character2 = new character('jill valentine', 'not being afraid of zombies')
const character3 = new character('donkey kong', 'being a POWERFUL primate')

console.log(character1.id) //1
console.log(character2.id) //2
console.log(character3.id) //3

console.log(totalCharactersMade) //reference error: totalCharactersMade is not defined
```

- Let's refactor our code so we can leverage `Object.create` to make our characters:

- "The `Object.create` method creates a new object, using an existing object as the prototype of the newly created object" - [MDN `Object.create`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

```js
const characterTemplate = {
  name: null,
  ability: null,
  refillHealth: function() {
    console.log(`${this.name} restored health!`)
  }
}

const character1 = Object.create(characterTemplate)
character1.name = 'fox mccloud'
character1.ability = 'being an intelligent fox who flies through outer space doing barrel rolls'

character1.__proto__ //characterTemplate

character1.refillHealth === characterTemplate.refillHealth //true

character1.refillHealth() //'fox mccloud restored health!'
```

- "`The Object.create()` method creates a new object, using an existing object to provide the newly created object's `__proto__` ." - [MDN Article on `Object.create`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
  - `Object.create` in our example above allows us to create new objects with `characterTemplate` in their prototype chain. In other words, character1 is **inheriting** the `refillHealth` method from `characterTemplate`.

- Again, our approach is getting better but manually assigning a `name` and `speciality` to our characters is tedious.

---
### External Resources
- [Factory Functions](https://en.wikipedia.org/wiki/Factory_(object-oriented_programming))
- [MDN Creating Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- [MDN Article on Inheritance and the Prototype Chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [MDN Article on `Object.create`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
- [MDN Constructor Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)
- [MDN `new` Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
- [MDN Article on the `class` keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Master the JS Interview: Difference Between Prototypal and Class Inheritance](https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9)
- [MDN Article on Object Prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
- [MDN Article on IIFEs](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)


---

