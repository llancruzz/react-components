import React, { useState } from "react";

function UseStateWithObjects() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) =>
            setName({
              ...name,
              firstName: e.target.value,
            })
          }
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) =>
            setName({
              ...name,
              lastName: e.target.value,
            })
          }
        />
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  );
}

export default UseStateWithObjects;

/*
useState hook:
1.| An object passed to the setter function overwrites the old one, so always spread old values before setting new ones 
2.| Pass a function with previous state to the setter function if new state depends on the previous
*/