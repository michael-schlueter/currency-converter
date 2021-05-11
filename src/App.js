import React, { useState, useEffect } from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

const ACCESS_KEY = '';
const BASE_URL = `http://api.exchangeratesapi.io/latest?access_key=${ACCESS_KEY}`;

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  useEffect(() => {
    getCurrencies();
  }, []);

  const getCurrencies = async () => {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
    const firstCurrency = Object.keys(data.rates)[0];
    setFromCurrency(data.base);
    setToCurrency(firstCurrency);
  }

  useEffect(() => {
    getExchangeRate();
  }, [fromCurrency, toCurrency])
  
  const getExchangeRate = async () => {
    if (fromCurrency != null && toCurrency != null) {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      setExchangeRate(data.rates[toCurrency])
    }
  }
  
  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  function handleAmountFromChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  function handleAmountToChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow 
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={e => setFromCurrency(e.target.value)}
        onChangeAmount = {handleAmountFromChange}
        amount={fromAmount}/>
      <div className="equals">=</div>
      <CurrencyRow 
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={e => setToCurrency(e.target.value)}
        onChangeAmount = {handleAmountToChange}
        amount={toAmount}/>
    </>
  );
}

export default App;
