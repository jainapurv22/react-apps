import { useState } from "react";
import data from "./data";

function App() {
  const handleChange = (e) => {
    const num = parseInt(e.target.value);
    setCount(num);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (count < 1) setCount(1);
    if (count > 8) setCount(8);
    setParas(data.slice(0, count));
  };
  const [count, setCount] = useState(1);
  const [paras, setParas] = useState(data);
  return (
    <div className="App">
      <div className="head">
        <h1>TIRED OF BORING LOREM IPSUM</h1>
      </div>
      <form className="form">
        <label htmlFor="para">Paragraphs:</label>
        <input
          type="number"
          name="para"
          id="para"
          value={count}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          GENERATE
        </button>
      </form>
      {paras.map((para, index) => {
        return (
          <div className="text">
            <p key={index}>{para}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
