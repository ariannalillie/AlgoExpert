# React Hooks
Hooks can only be called at the top level of a functional component.


## Basic Hooks

### useState
The most frequently used hook used to update the state
```JavaScript
import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0)
    return (
        <button onClick={()=> setCount(count+1)}>{count}</button>
    );
  }
```

### useEffect
useEffect is a function that takes a function that you define. This function
 will run everytime stateful data changes on the component.
### useContext

## Additional Hooks
* useReducer
* useCallback
* useMemo
* useRef
* useImperativeHandle
* useLayoutEffect
* useDebugValue
