# React Component Lifecycle
[Docs](https://reactjs.org/docs/react-component.html#the-component-lifecycle)

[React Lifecycle Methods Diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

## Agenda

- Tweet
- Koala fetch
- Widget Picker
- Clocks and Stocks

## Tweet

When we see

```
eat(
  makeBurger()
)
```

we know `makeBurger()` runs before `eat()`.

Assuming Form and Button are React components and are rendered like this:

```
<Form>
  <Button />
</Form>
```

whose render method will run first?

## Koala

> If you run json-server db.json you will get an API of koala photos running on localhost:3000. Demonstrate a fetch request to http://localhost:3000/koalas from App and select a koala at random to pass as a koala prop to the RandomKoala component. Use that prop to render a koala image in the component.

## Widget Picker

> create a widget that switches between showing a clock and a stock ticker on click. WidgetSelector should be a child of app which has siblings of DigitalClock and StockTicker.

## Clocks

> This component will hold a time state which we will initialize in the constructor. Then we will setInterval to update this state once a second in componentDidMount.

## and Stocks

> Create a function which will randomly generate a two-digit stock price. Like our clock, setInterval so the stock price changes every second. You want the price to show green if it has gone up, and red if it has gone down. This means you will need access to the previous state and current state in order to compare the prices.

## Lifecycle methods

### What should I know
- *constructor(props)*
- *render()*
- *componentDidMount()*
- *componentDidUpdate()*
- *componentWillUnmount()*

### Birth (Mounting)
- *constructor(props)*
  - called before it is mounted
- static getDerivedStateFromProps(props, state)
  - invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state, or null to update nothing.
- *render()*
- *componentDidMount()*
  - invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

### Life (Updating)
- static getDerivedStateFromProps(props, state)
  - invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state, or null to update nothing.
- shouldComponentUpdate(nextProps, nextState)
  - invoked before rendering when new props or state are being received
  - returns boolean which determines if render should be called
- *render()*
- getSnapshotBeforeUpdate(prevProps, prevState)
  - invoked right before the most recently rendered output is committed to e.g. the DOM. It enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed. Any value returned by this lifecycle will be passed as a parameter to componentDidUpdate()
- *componentDidUpdate(prevProps, prevState)*
  - invoked immediately after updating occurs. This method is not called for the initial render
  - watch out for infinite loops if setting state!

### Death (Unmounting)
- *componentWillUnmount()*
  -  invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().
