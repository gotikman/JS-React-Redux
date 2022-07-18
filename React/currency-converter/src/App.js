import { useState, useEffect } from 'react';

import AppHeader from './components/AppHeader';
import CurrencyConvert from './components/CurrensyConvert';
import './App.css';

function App() {

  const [usd, setUsd] = useState(null)
  const [eur, setEur] = useState(null)

  useEffect(() => {
    fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
      .then(res => res.json())
      .then(res => {
        setUsd(res[25].rate.toFixed(2));
        setEur(res[32].rate.toFixed(2));
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <AppHeader usd={usd} eur={eur} />
      <CurrencyConvert usd={usd} eur={eur} />
    </>
  )
}

export default App;

