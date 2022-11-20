import { useState } from "react";
import './App.css';

function App() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className="App">
      <div onClick={handleClick}>
        {!active ? (
          <button type="button" className="btn btn-primary">
            Gabriel e ratat
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
