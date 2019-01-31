![promise-me](https://media.giphy.com/media/5G98t8QjqBLK8/giphy.gif)

![javascript-fun](https://i.imgur.com/hAHJSVD.gif)

# Promises and Fetch

## Objectives
* Distinguish between sync and async code
* Recognize code that uses Promises
* Use the `.then` method to add handlers for promise resolution
* Use the options to `fetch()` to configure requests

## Deliverables

* First, make a fetch and play with the Promise that it returns.
* Second, use a then to console.log the result.
* Third, talk about the stack and the callback queue!
  * (Recommend loupe video)
* Fourth, use the fetched data to render the pokemon.
* Fifth, wire up the form to add new pokemon.

* Add me as a pokemon? 😱

## Introduction to Async

* Javascript is _synchronous_
  * It executes statements one at a time
* But... sometimes things take a long time
  * We don't want these things to block UI rendering
  * When we are waiting for javascript to run, the page is not responsive

```
function sleep(n) {
  var i = 0
  while(i < (12 ** 8) * n) {
    i++
  }
}

sleep(10)
```

```js
var url = "https://dog.ceo/api/breeds/image/random"
var promise = fetch(url)
promise
.then(() => console.log('resolved'))
.then(() => console.log('after logging resolved'))
.then(() => console.log('after logging after resolved'))
```

_Common Bug_: evaluating a function instead of passing it to `then`

Q: When will the message be logged?
```js
var promise = fetch(url)
promise.then(console.log("message"))
```

### An Intro to `fetch`
* Let's take a closer look at the `fetch` method.

```js
fetch("https://dog.ceo/api/breeds/list/all")
.then(res => console.log(res))
```

* We get back a Promise from `fetch`, which we can add handlers to with `then`
* The handler that we pass to `then` gets a `Response` object
* We can call the `.json` method on the `Response` to get a promise for the parsed json from the response

```js
fetch("https://dog.ceo/api/breeds/list/all")
.then(res => res.json())
.then(json => console.log(json))
```

* If the response is not formatted as JSON, we can use `.text` instead

```js
fetch("https://dog.ceo/api/breeds/list/all")
.then(res => res.text())
.then(text => console.log(text))
```

## Challenge

Starting with a file `index.js` with:

```js
var url = "https://dog.ceo/api/breeds/image/random/4"
```

and a standard `index.html` that loads the `index.js`

Add javascript so that
- on page load
- fetch the images
- parse the response as json
- add image elements to the DOM for each image in the array

## Resources

[loupe-site]: http://latentflip.com/loupe
[promises-video]: https://youtu.be/aVNzq8u0F0E
[mdn-promises]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[problem-promises]: https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html
