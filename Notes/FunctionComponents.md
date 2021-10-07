# Function Componenets
Function components can do everything that class components can do. And in most cases
offer a more elegant, concise way of creating React components.

```JavaScript
export const Friend = () => {
    return <h1>Hello friend</h1>
}
```
## Vocab
**props -** Function components receive props as a parameter.

```JavaScript
function GreeterAsFunction(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```
