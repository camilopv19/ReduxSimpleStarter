import React from 'react';
import ReactDOM from 'react-dom';
//Create a new component which produces HTML code
const App = function(){ //CLASS: "App"
    return <div>Hi!</div>;
}

//Takes the component's generated HTML and
//puts it on the page (in the DOM)
ReactDOM.render(<App />); //Self enclosing Tag for an INSTANCES of the CLASS/Component "App"