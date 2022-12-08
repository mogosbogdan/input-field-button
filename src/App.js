import "./App.css";
import React, { useState } from 'react';

function App() {
  // use the useState hook to manage the value of the input field
  const [value, setValue] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // set the value of the input field to the value entered by the user
    setValue(value);
  }

  const [active, setActive] = useState(false);
  const handleClick = () => {
    if (value === "Gabriel" ) {
      setActive(!active);
    } else {
      setActive(active)
    }
  };
  return (


    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Enter a name:
          <input type="text" value={value} onChange={handleChange} />
        </label>
      </form>

      <div onClick={handleClick}>
        {!active ? (
          <button type="button" className="btn btn-primary">
            {value} e ratat
          </button>
        ) : (
          <button type="button" className="btn btn-danger">
            True
          </button>
        )}
      </div>
    </div>
  );
}


export default App;
