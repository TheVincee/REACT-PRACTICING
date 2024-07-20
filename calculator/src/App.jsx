import { useState } from 'react';
import './App.css';

function App() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e, setNumber) => {
    setNumber(e.target.value);
  };

  const operations = {
    '+': (num1, num2) => num1 + num2,
    '-': (num1, num2) => num1 - num2,
    '*': (num1, num2) => num1 * num2,
    '/': (num1, num2) => num2 !== 0 ? num1 / num2 : 'Cannot divide by zero',
  };

  const calculate = (operation) => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    if (isNaN(num1) || isNaN(num2)) {
      setResult('Invalid input');
      return;
    }

    const res = operations[operation](num1, num2);
    setResult(res);
  };

  return (
    <>
      <form action="">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <div className="input-container">
                <input
                  type="text"
                  className="input input-1"
                  placeholder="First number"
                  value={firstNumber}
                  onChange={(e) => handleInputChange(e, setFirstNumber)}
                />
                <input
                  type="text"
                  className="input input-2"
                  placeholder="Second number"
                  value={secondNumber}
                  onChange={(e) => handleInputChange(e, setSecondNumber)}
                />
                <input
                  type="text"
                  className="input input-result"
                  placeholder="Result"
                  value={result}
                  disabled
                />
              </div>
              <div className="button-container">
                <button type="button" style={{ '--clr': '#39FF14' }} onClick={() => calculate('+')}>
                  <span>+</span><i></i>
                </button>
                <button type="button" style={{ '--clr': '#FF44CC' }} onClick={() => calculate('-')}>
                  <span>-</span><i></i>
                </button>
                <button type="button" style={{ '--clr': '#0FF0FC' }} onClick={() => calculate('*')}>
                  <span>*</span><i></i>
                </button>
                <button type="button" style={{ '--clr': '#8A2BE2' }} onClick={() => calculate('/')}>
                  <span>/</span><i></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default App;
