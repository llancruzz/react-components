import React, { useState } from "react";

function UseStateWithArrays() {
  const [nums, setNums] = useState([1, 2, 3]);
  const addNums = () => {
    setNums([...nums, nums.length + 1]);
  };
  const removeNum = () => {
    setNums(
      nums.filter((item, idx) => {
        return idx !== nums.length - 1;
      })
    );
  };
  const buggyPushNums = () => {
    nums.push(nums.length + 1);
    setNums(nums);
    console.log(nums);
  };
  return (
    <div>
      <button onClick={addNums}>Add Item</button>
      <button onClick={removeNum}>Remove Item</button>
      <button onClick={buggyPushNums}>Buggy Push Item</button>
      <ul>
        {nums.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseStateWithArrays;

/*
useState hook and arrays:
1.| An array passed to the setter function overwrites the old one
2.| Never update the state directly or use functions like push or pop, as that leads to bugs
3.| Use the spread operator to copy an array when adding an item and the filter method to remove it
*/
