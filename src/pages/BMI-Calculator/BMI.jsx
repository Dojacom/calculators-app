import React, {useState} from 'react';
import './BMI.css'


export default function BMI() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBMI] = useState(null);
  const [result, setResult] = useState('');

  const calculateBMI = () => {
    const heightValue = height / 100;
    const bmiValue = weight / (heightValue * heightValue);
    setBMI(bmiValue);

    if (bmiValue < 18.5) {
      setResult('Under Weight.');
    } else if (bmiValue >= 18.5 && bmiValue <= 24.5) {
      setResult('Normal Weight.');
    } else if (bmiValue >= 24.5 && bmiValue <= 29.5) {
      setResult('Over weight.');
    } else if (bmiValue >= 30) {
      setResult('Obesity.');
    }
  };

  return (
    <div className="main-container main-cont" id="main-container">
      <div className="bmi-container contain">
       
        <div className="wheight">
          Your Height(cm):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          Your Weight(kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <button onClick={calculateBMI} id='btn'>Compute BMI</button>

        <input
          type="number"
          disabled
          value={bmi || ''}
          id="bmi-result"
        />

        <h4>
          Your weight result: <span id="result">{result}</span>
        </h4>
      </div>
    </div>
  );
};

