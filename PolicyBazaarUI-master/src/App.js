import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Feed from './components/Feed';
import TermLife from './components/Feed/Form/TermLife';

import Footer from './components/Footer/Footer';

function App() {
  const [stat, setStat] = useState(false);

  const func = (ele) => {
    setStat(ele);
  };
  return (
    <>
      {stat ? (
        <TermLife />
      ) : (
        <div className='App'>
          <header className='App-header'>
            <Header />
          </header>
          <div className='feeed'>
            <Feed func={func} />
          </div>
          <footer className='moreInsurance'>
            <Footer />
          </footer>
        </div>
      )}
    </>
  );
}

export default App;
