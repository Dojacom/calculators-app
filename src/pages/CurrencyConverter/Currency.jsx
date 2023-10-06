import React, { useState, useEffect, useCallback } from 'react';
import './Currency.css';

const exchangeRates = {
  AUD: 1.3592,
  CAD: 1.2601,
  EUR: 0.8511,
  INR: 73.5,
  JPY: 109.94,
  USD: 1
};

const CurrencyConverter = () => {
  const [currencyFirst, setCurrencyFirst] = useState('USD');
  const [currencySecond, setCurrencySecond] = useState('INR');
  const [worthFirst, setWorthFirst] = useState('');
  const [worthSecond, setWorthSecond] = useState('');

  const calculate = useCallback(() => {
    const exchangeRate = exchangeRates[currencyFirst] / exchangeRates[currencySecond];
    const convertedWorthSecond = (parseFloat(worthFirst) * exchangeRate).toFixed(2);
    setWorthSecond(convertedWorthSecond);
  }, [currencyFirst, currencySecond, worthFirst]);

  useEffect(() => {
    calculate(); // Recalculate whenever currencyFirst, currencySecond, or worthFirst changes
  }, [calculate]);

  return (
    <div className="main-container" id="main-container">
      <div className="currency-container">
        <h1 className="currency-heading">Currency Converter</h1>
        <div className="currency">
          <select
            id="currency-first"
            value={currencyFirst}
            onChange={(e) => setCurrencyFirst(e.target.value)}
          >
            {Object.keys(exchangeRates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <input
            type="number"
            id="worth-first"
            min="0"
            value={worthFirst}
            onChange={(e) => {
              setWorthFirst(e.target.value);
            }}
          />
        </div>
        <div className="currency">
          <select
            id="currency-second"
            value={currencySecond}
            onChange={(e) => setCurrencySecond(e.target.value)}
          >
            {Object.keys(exchangeRates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <input
            type="number"
            id="worth-second"
            value={worthSecond}
            disabled
          />
        </div>
        <p className="exchange-rate">
          {currencyFirst} = {exchangeRates[currencyFirst] / exchangeRates[currencySecond]} {currencySecond}
        </p>
      </div>
    </div>
  );
};

export default CurrencyConverter;
