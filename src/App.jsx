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
      <h1>BMI Calculator</h1>
      <div>
        <label>
          Height (cm):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
      </div>
      <button onClick={calculateBmi}>Calculate</button>
      {bmi && (
        <div>
          <h2>Your BMI is {bmi}</h2>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default App;
