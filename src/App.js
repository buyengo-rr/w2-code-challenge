import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched bots:', data);
        setBots(data);
      })
      .catch(error => {
        console.error('Error fetching bots:', error);
      });
  }, []);

  function addToArmy(bot) {
    if (!army.find(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  }

  function removeFromArmy(bot) {
    setArmy(army.filter(b => b.id !== bot.id));
  }

  return (
    <div className="App">
      <h1>🤖 Bot Battlr 🤖</h1>
      <YourBotArmy army={army} removeFromArmy={removeFromArmy} />
      <BotCollection bots={bots} addToArmy={addToArmy} />
    </div>
  );
}

export default App;
