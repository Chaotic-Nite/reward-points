import { useState } from "react";
import "./App.css";
import RewardBonus from "./components/reward-bonus/RewardBonus";

function App() {
  const [state, setState] = useState("");
  const [input, setInput] = useState("");
  const [receipt, setReceipt] = useState(null);
  const data = require("./test-receipts/receipts.json");

  const searchAccounts = (event) => {
    if (event.key === "Enter") {
      const inputValue = input;
      setInput("");
      const filterdData = data.filter(
        (item) => item.rewardAccount == inputValue
      );
      if (filterdData.length === 0) {
        setState("");
        return;
      }
      setState(inputValue);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Rewards Account: {state}</h1>
        <input
          className="new-todo"
          placeholder="Enter Rewards Account"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => searchAccounts(event)}
          autoFocus
        />

        <RewardBonus data={data} />
      </header>
    </div>
  );
}

export default App;
