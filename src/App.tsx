import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/styles.css'
import Card from './components/Card/Card';

function App() {

  const [active, setActive] = useState("firstcard")

  return (
    <>
      <nav>
        <button onClick={() => setActive("firstcard")}>One</button>
        <button onClick={() => setActive("secondcard")}>Two</button>
        <button onClick={() => setActive("thirdcard")}>Three</button>
      </nav>
      <div>
        {active === "firstcard" && <Card title='1' />}
        {active === "secondcard" && <Card title='2' />}
        {active === "thirdcard" && <Card title='3' />}
      </div>
    </>
  );
}

export default App;
