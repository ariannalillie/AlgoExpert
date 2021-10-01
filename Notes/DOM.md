# Document Object Model
The DOM is a tree of nodes that represent a webpage, it is then
painted by the browser for users to see.

## The Virtual DOM
Some frontend frameworks, like Vue and React create their representation of
the DOM as a JavaScript object and whenever a change is going to be made to the
DOM this framework instead makes a copy of this Javascript object and makes the
change to that copy and compares the two Javascript objects to see what has changed.
Then informs the browser of these changes and only re-renders the parts that have changed.
This helps us get around having to rerender the entire page/DOM everytime a chance is made. Also making changes
to JavaScript objects and then comparing them is much faster than tryng to do the same thing with DOMs.

### Using a virtual DOM...
* Prevents unnecessary re-renders
* Only re-renders updated elements
* Groups together re-renders

## Vocab
**Diffing -** A process where the new virtual DOM is compared with the pre-update version
and figures out exactly what DOM objects have changed.
