# UseEffect
The Effect Hook is used to run some JavaScript code after each render, such as fetching data from the backend, managing timers and intervals, and reading from and
making changes to the DOM.

The useEffect function calls its first arguement (the effect) after each time a component renders.

If we want to call our effect after the first render we pass in an empty array to UseEffect()
as the second arguement. This second arguement is called the **dependency array**.
The dependency array is used to tell the UseEffect() method when to call our effect and when to skip it.

```JavaScript
useEffect(() => {
  alert("component rendered for the first time");
  return () => {
    alert("component is being removed from the DOM");
  };
}, []);
```

```JavaScript
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if the value stored by count changes
```
