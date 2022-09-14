import {useState} from 'react';

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ['/', '*', '+', '-', '.'];

  

  const createDigits = () => {
    const digits = [];
    for (let i=1; i<10; i++) {
      digits.push(
        <button  key={i}>{i}</button>
      )
    }

    return digits;
  }

  
  return (
    <div className="fi-App">
      <div className="fi-calculator">
        <div className="fi-display">
          {result ? <span>({result})</span>: ''}&nbsp;
          {calc || "0"}
        </div>
        <div className="fi-operators">
          <button >/</button>
          <button >*</button>
          <button >+</button>
          <button >-</button>

          <button >DEL</button>
        </div>

        <div className="fi-digits">
          {createDigits()}
          <button >0</button>
          <button >.</button>
          
          <button >=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
