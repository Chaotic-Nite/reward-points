import { useState } from "react";
import "./App.css";
import RewardBonus from "./components/reward-bonus/RewardBonus";

function App() {
  const [state, setState] = useState({
    input: "",
  });
  const data = require("./test-receipts/receipts.json");
  return (
    <div className="App">
      <header className="App-header">
        <RewardBonus data={data} />
      </header>
    </div>
  );
}

export default App;
