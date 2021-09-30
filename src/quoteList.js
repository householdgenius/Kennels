import React, { useState, useEffect } from 'react';
import { QuoteCard } from './QuoteCard';
import { getQuote } from './quote';

export const QuoteList = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote,setQuote] = useState({})
  const getQuotes = () => {
    return getQuote().then(quotesFromAPI => {
      setQuotes(quotesFromAPI)
      console.log(quotesFromAPI)
    });
  };


  useEffect(() => {
    getQuotes();
  }, []);

const handleClick = () => {
  setQuote(quotes[Math.floor(Math.random()*quotes.length)])
}

 
  return (
<>
    <div className="container-cards">
        {quotes.length > 0 ? 
      <QuoteCard quote={quote}/> : <p>Loading quotes...</p>
        }
    </div>
       <button onClick={handleClick}>Click Me</button>
       </>
  );
};