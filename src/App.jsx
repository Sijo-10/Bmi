import React, { useState } from 'react';
import './App.css';

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBmi = () => {
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);
    if (bmiValue < 18.5) {
      setMessage('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setMessage('Normal weight');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setMessage('Overweight');
    } else {
      setMessage('Obese');
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1>BMI Calculator</h1>
        <div className="input-group">
          <label>
            Height (cm):
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter height"
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Weight (kg):
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter weight"
            />
          </label>
        </div>
        <button onClick={calculateBmi}>Calculate</button>
        {bmi && (
          <div className="result">
            <h2>Your BMI is {bmi}</h2>
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
