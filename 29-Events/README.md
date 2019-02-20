### React Events & Forms 

###Outline
* More Component Hierarchy 
* Synthetic Events: how do events work in React? 
* Let's build
	-simple event handling
	-hoisted event handling 


### Presentational vs Container Components
There are 2 distinctions for components that are mostly overlapping, but slightly different
* Class vs Functional Components
This difference is focused more on syntax and is pretty self-explanatory: class components use class syntax and functional components are just functions that return JSX
* Container(Smart) vs Presentational(Dumb) Components
Containers contain most of the programming logic and/or are used to manage state. As they often need state and component lifecycle methods, containers are usually class components, though it is entirely possible to write a container component as a functional component, as in cases where the container needs a lot of logic, but makes no use of state
Presentational components contain little-to-no logic and are typically almost entirely dependent on their parent components for the data they use to display
Because of the way information trickles down from parent to child in a component hierarchy via props, fewer, more centralized sources of data and functionality are much more manageable at scale



### React Synthetic Events and Event Handlers
* Event triggering is the same, the difference is that rather than manually finding and editing DOM nodes, we will eventually call setState and let changes to state generate the desired DOM changes
* Event handler callbacks should be written as arrow functions to avoid losing context


### Documentation for Events
https://reactjs.org/docs/events.html#mouse-events
