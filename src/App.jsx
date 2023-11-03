import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem("username");
  });
  const [inputValue, setInputValue] = useState(userName);

  useEffect(() => {
    localStorage.setItem("username", userName);
  }, [userName]);

  function handleSubmit(event) {
    event.preventDefault();
    setUserName(inputValue);
  }
  return (
    <>
      <h1>Hallo {userName}</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
          type="text"
        />
        <button>Save</button>
      </form>
    </>
  );
}

export default App;
