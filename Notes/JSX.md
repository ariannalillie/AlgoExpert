# JSX
JSX is a syntax extension for JavaScript. It was written to be used with React and looks a lot like HTML
JSX is not valid JavaScript and if a file contains JSX then that file will have to be compiled into
regluar JavaScript before it reaches the web browser.

``` JavaScript
const h1 = <h1>Hello world</h1>;
```

### Vocab
**JSX Element -** A basic unit of JSX is called a JSX element. A JSX element looks exactly like HTML, the only difference is that you would find it in a JavaScript file
instead of an HTML file.

JSX Elements are treated as expressions and can anywhere JavaScript can go. For example they can be stored in an object.

``` JavaScript
const myTeam = {
  center: <li>Benzo Walli</li>,
  powerForward: <li>Rasha Loa</li>,
  smallForward: <li>Tayshaun Dasmoto</li>,
  shootingGuard: <li>Colmar Cumberbatch</li>,
  pointGuard: <li>Femi Billon</li>
};
```
**JSX Attribute -** A JSX attribute is written using HTML-like syntax: a name, followed by an equals sign, followed by a value.
The value should be wrapped in quotes, like this:

``` JavaScript
<a href='http://www.example.com'>Welcome to the Web</a>;

const title = <h1 id='title'>Introduction to React.js: Part I</h1>;
```

**JSX Expressions must have ONLY ONE outermost element**

## Rendering JSX
Rendering JSX means to make it appear on screen.

``` JavaScript
const toDoList = (
  <ol>
    <li>Learn React</li>
    <li>Become a Developer</li>
  </ol>
);

ReactDOM.render(
  toDoList,
  document.getElementById('app')
);
```
**ReactDOM.render() -** ReactDOM is the name of a JavaScript library that contains several React
specific methods that deal with the DOM. ReactDOM is the most common way to render JSX. It takes a JSX
expression and creates a corresponding tree of DOM nodes and adds that tree to the DOM. One special thing about
ReactDOM.render() is that is only updates DOM elements that have changed.

## class vs className
In JSX you can't use the word class, you must use the keyword className instead. This is because
JSX gets translated into JavaScript and **class** is a resevred word in JavaScript. When JSX is rendered
JSX className attributes are automatically rendered as class attributes.

```JavaScript
<h1 className="big">Hey</h1>
```

## Curly Braces in JSX
Any code between the tags of a JSX element will read as JSX not as regular JavaScript,
to change this code to JavaScript, you can do this by adding curly braces around the code.

```JavaScript
ReactDOM.render(
  <h1>{2 + 3}</h1>,
  document.getElementById('app')
);
```

## If Statements in JSX
**You cannot inject an if statement into a JSX expressiom**
One way to get around this you can write an if statement that does not get injected into your JSX.

```JavaScript
if (user.age >= drinkingAge) {
  message = (
    <h1>
      Hey, check out this alcoholic beverage!
    </h1>
  );
} else {
  message = (
    <h1>
      Hey, check out these earrings I got at Claire's!
    </h1>
  );
}
```
Another way to get around this is by using a ternary operator.

```JavaScript
const headline = (
  <h1>
    { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
  </h1>
);
```
