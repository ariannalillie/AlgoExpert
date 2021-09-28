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
