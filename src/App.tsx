import React, { useState } from 'react';
import './App.css';
import Module from './components/Module';
import Sidebar from './components/Sidebar';


interface Item {
  key: number;
  task_name: string;
}

function App() {
  const [item, setitem] = useState("");
  const [counter, setcounter] = useState(0);
  const [lists, setlists] = useState<Item[]>([]);

  const addItem = () => {
    lists.push({ key: counter, task_name: item });
    setitem("");
    setcounter(counter + 1);
  }

  const removeAll = () => {
    setlists([]);
  }

  return (
    <div className="App">
      <header className="header">
        <h1 className="title"> TODO APP </h1>
        <div className="Hero">
          <input className="inputs" type="text" placeholder="Enter Your task" value={item} onChange={e => setitem(e.target.value)} />
          <button className="btn" onClick={addItem}> Add Item </button>
        </div>
      </header>
      <div className="container">
        <Sidebar />
        <Module lists={lists} removeAll={removeAll} />
      </div>
    </div>
  );
}

export default App;
