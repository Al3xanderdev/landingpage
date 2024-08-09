import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/styles.css'
import Card1 from './components/Cards/Card1';
import Card2 from './components/Cards/Card2';
import Card3 from './components/Cards/Card3';
import Card4 from './components/Cards/Card4';
import Card5 from './components/Cards/Card5';
import alignleft_icon from './components/res/align-left.svg'
import gitbranch_icon from './components/res/git-branch-01.svg'
import filecheck_icon from './components/res/file-check-02.svg'
import users_icon from './components/res/users-02.svg'
import ruble_icon from './components/res/currency-ruble-circle.svg'


function App() {

  const [active, setActive] = useState("firstcard")

  return (
    <>
      <nav className='header'>
        <button className="button" onClick={() => setActive("firstcard")}>
          <img className='btnpic' src={alignleft_icon} alt='' />
          <div className='btnname'>Описание</div>
        </button>
        <button className="button" onClick={() => setActive("secondcard")}>
          <img className='btnpic' src={gitbranch_icon} alt='' />
          <div className='btnname'>Этапы</div>
        </button>
        <button className="button" onClick={() => setActive("thirdcard")}>
          <img className='btnpic' src={filecheck_icon} alt='' />
          <div className='btnname'>Документооборот</div>
        </button>
        <button className="button" onClick={() => setActive("fourthcard")}>
          <img className='btnpic' src={users_icon} alt='' />
          <div className='btnname'>Коммуникация</div>
        </button>
        <button className="button" onClick={() => setActive("fifthcard")}>
          <img className='btnpic' src={ruble_icon} alt='' />
          <div className='btnname'>Финансы</div>
        </button>
      </nav>
      <div>
        {active === "firstcard" && <Card1 />}
        {active === "secondcard" && <Card2 />}
        {active === "thirdcard" && <Card3 />}
        {active === "fourthcard" && <Card4 />}
        {active === "fifthcard" && <Card5 />}
      </div>
    </>
  );
}

export default App;
