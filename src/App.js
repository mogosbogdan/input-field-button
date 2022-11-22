import { useState } from "react";
import "./App.css";

function App() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  const [fName, setfName] = useState("");

  return (
    <>
      <form>
        <label>
          <input
            type="text"
            value={fName}
            onChange={(e) => setfName(e.target.value)}
          />
          <input type="submit" />
        </label>
      </form>
      <div className="App">
        <div onClick={handleClick}>
          {!active ? (
            <button id="bootBtn" type="button" className="btn btn-primary">
              {fName} e ratat
            </button>
          ) : (
            <button type="button" className="btn btn-danger">
              True
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
