import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { useState } from "react";
import { Card } from "react-bootstrap";
import RewardBonus from "./components/reward-bonus/RewardBonus";

function App() {
  const [state, setState] = useState('');
  const [value, setValue] = useState([])
  const [input, setInput] = useState("");
  const data = require("./test-receipts/data.json");
  
  const searchAccounts = (event) => {
    if (event.key === "Enter") {
      const inputValue = input;
      setInput("");
      const filterdData = data.filter(
        (item) => item.rewardAccount === inputValue
        );
        console.log(filterdData)
      if (filterdData.length === 0) {
        setState("");
        return;
      }
      setState(inputValue);
      setValue(filterdData)
    }
  };

  return (
    <div className="App">
        <input
          className="new-todo"
          placeholder="Enter Rewards Account"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => searchAccounts(event)}
          autoFocus
      />
      <div className="App-header">
        <Card style={{ width: '25rem' }} bg='primary' >
        <Card.Header>{state.account ? `Rewards Account: ${state.account}` : 'No Rewards Found' }</Card.Header>
          <Card.Body>
            {value.length > 0 ? <RewardBonus data={value} /> : null}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;
