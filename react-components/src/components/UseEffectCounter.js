import React, { useState, useEffect } from "react";

function UseEffectCounter() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log("count 1 effect");
    document.title = count;
  }, [count]);
  useEffect(() => {
    console.log("Creating timer");
    const interval = setInterval(() => {
      console.log("Interval executed");
      setTime((time) => time + 1);
    }, 1000);
    return () => {
      console.log("cleaning up!");
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        Increment Count ({count})
      </button>
      <h2>Time is {time}</h2>
    </div>
  );
}

export default UseEffectCounter;

/*
useEffect hook:
1.| You should always specify the usseEffect dependency array
2.| The array can consist of several props or state properties
3.| Without the array, useEffect will run on every render, which could hurt performance
*/
