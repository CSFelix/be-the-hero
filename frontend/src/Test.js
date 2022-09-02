import React, { useState } from 'react';
import Header from './Header.js'

// JSX (JavaScript XML)
function Test() {

  // useState returns an Array: [value, setValue]
  const [counter, setCounter] = useState(0);

  // using setCounter function to increment the State
  function incrementCounter() { setCounter(counter + 1);}

  return (
    //<Header title='Hello World, Felix!' />

    <div>
      <Header>Hello World, Felix!<br/>This is your Counter: { counter }</Header>
      <button onClick={ incrementCounter }>Increment!</button>
    </div>
  );
}

export default Test;