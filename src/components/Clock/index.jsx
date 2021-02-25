import React, { useState } from 'react';

function Clock() {
  const [counter, setCounter] = useState(0);

  setTimeout(() => {
    setCounter(counter + 1);
  }, 1000);

  return <h1>{counter}</h1>;
}

export default Clock;
