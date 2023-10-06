import React, { useState } from 'react';
import './Calc.css'

export default function ArithmeticCalc() {
  const [displayValue, setDisplayValue] = useState('');

 
  const handleButtonClick = (value) => {
    setDisplayValue((prevDisplayValue) => prevDisplayValue + value);
  };

  const handleClear = () => {
    setDisplayValue('');
  };

  const handleDelete = () => {
    setDisplayValue((prevDisplayValue) => prevDisplayValue.slice(0, -1));
  };


  const handleCalculate = () => {
    try {
      const result = evaluateExpression(displayValue);
      setDisplayValue(result);
    } catch (error) {
      setDisplayValue('Error');
    }
  };
  // eslint-disable-next-line no-new-func
  const evaluateExpression = (expression) => {
    const sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, '');
    return Function(`'use strict'; return (${sanitizedExpression})`)();
  };
  
  return (
    <div className="main-container main-cont">
    <div className="calc-container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" name="display" value={displayValue} readOnly />
          </div>
          <div>
            <input type="button" value="AC" onClick={handleClear} className="operator" />
            <input type="button" value="DE" onClick={handleDelete} className="operator" />
            <input type="button" value="*" onClick={() => handleButtonClick('*')} className="operator" />
            <input type="button" value="/" onClick={() => handleButtonClick('/')} className="operator" />
          </div>
          <div>
            <input type="button" value="7" onClick={() => handleButtonClick('7')}/>
            <input type="button" value="8" onClick={() => handleButtonClick('8')}/>
            <input type="button" value="9" onClick={() => handleButtonClick('9')}/>
            <input type="button" value="+" onClick={() => handleButtonClick('+')} className="operator" />
          </div>
          <div>
            <input type="button" value="4" onClick={() => handleButtonClick('4')}/>
            <input type="button" value="5" onClick={() => handleButtonClick('5')}/>
            <input type="button" value="6" onClick={() => handleButtonClick('6')}/>
            <input type="button" value="-" onClick={() => handleButtonClick('-')} className="operator" />
          </div>
          <div>
            <input type="button" value="3" onClick={() => handleButtonClick('3')}/>
            <input type="button" value="2" onClick={() => handleButtonClick('2')}/>
            <input type="button" value="1" onClick={() => handleButtonClick('1')}/>
            <input type="button" value="." onClick={() => handleButtonClick('.')} className="operator" />
          </div>
          <div>
              <input type="button" value="00" onClick={() => handleButtonClick('00')} />
              <input type="button" value="0" onClick={() => handleButtonClick('0')} />
              <input type="button" value="=" onClick={handleCalculate} className="equal" />
                    
          </div>

        </form>
      </div>
    </div>
    </div>
)}
