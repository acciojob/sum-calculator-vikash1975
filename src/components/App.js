import React, { useState, useEffect } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [sum, setSum] = useState(0);

  useEffect(() => {
    let total = 0;

    for (let char of inputValue) {
      let num = parseInt(char);
      if (!isNaN(num)) {
        total += num;
      }
    }

    setSum(total);
  }, [inputValue]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Live Sum Calculator</h2>

      <input
        type="text"
        placeholder="Type numbers"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <h3>Total Sum: {sum}</h3>
    </div>
  );
}

export default App;