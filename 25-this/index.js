this.name = 'window object'

// let dog = {
//   name: 'seyla',
//   needsHaircut: true,
//   groom: function () {
//     console.log(this);
//     if (this.needsHaircut) {
//       console.log("seyla gets her hair did. how cute!");
//       this.needsHaircut = false;
//     } else {
//       console.log("nah, gonna roll around outside")
//     }
//   }
// }

function Dog(name) {
  console.log(this)
  this.name = name
  this.needsHaircut = true
  this.groom = () => {
    console.log(this)
    if (this.needsHaircut) {
      console.log("seyla gets her hair did. how cute!");
    } else {
      console.log("nah, gonna roll around outside")
    }
  }
  // this.groom = function () {
  //   console.log(this);
  //   if (this.needsHaircut) {
  //     console.log("seyla gets her hair did. how cute!");
  //     this.needsHaircut = false;
  //   } else {
  //     console.log("nah, gonna roll around outside")
  //   }
  // }.bind(this)
  // this.groom = this.groom.bind(this)
}

let example = Dog('seyla')
let seyla = new Dog('seyla')


document.addEventListener('DOMContentLoaded', () => {
  let button = document.querySelector("button")
  // would like to say button.addEventListener('click', dog.groom)
  // button.addEventListener('click', dog.groom.bind(dog))
  button.addEventListener('click', seyla.groom)
  // obj.method.bind(obj)
})

/* Know the defaults */

function nonStrictTest() {
  console.log(this); // should log out Window
}

function strictTest() {
  'use strict';
  console.log(this); // logs out undefined
}


/************ Function Called with New Keyword ***********/
//inside a constructor fn, this will be the newly created object

/********************************************************/

/************ Bind Call Apply ****************************/

/********************************************************/

/************ Function called on an Object ***************/

/********************************************************/

/************ Simple Function Call ***********************/

/********************************************************/

/************ Arrow Functions ****************************/

/********************************************************/
