import React, { useState, useEffect } from 'react';
import './Main.css';
import Main from './Components/Main';
import axios from 'axios';

const App = () => {
  const [quote, setQuote] = useState('');

  const quoteAPI = (async) => {
    let arrayOfQuotes = [];
    try {
      const data = axios.get('https://api.kanye.rest');
      arrayOfQuotes = data.data;
    } catch (error) {
      console.log(error);
    }

    try {
      setQuote(arrayOfQuotes.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    quoteAPI();
  }, []);

  return (
    <div className="App">
      <div className="quoteBox">
        <div className="container">
          <div className="quoteButton">
            {" "}
            <button onClick={quoteAPI}>Get Quote</button>
            <button onClick={quoteAPI}>Add Favorite</button>
          </div>
          <div className="quote">{quote}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
