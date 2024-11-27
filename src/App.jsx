import { useState } from 'react'
import './App.css'

function App() {
  const [height,setHeight] = useState("");
  const [weight,setWeight] = useState("");
  const [bmi,setBmi] = useState("null");
  const [status,setStatus] = useState("");

  const calculateBmi = () =>{

    if(height && weight)
    {
      const heightInMeters = height/100;
      const bmiValue = weight/(heightInMeters*heightInMeters);
      setBmi(bmiValue.toFixed(2));

      if(bmiValue<8.5){
        setStatus("Underweight");
      }else if(bmiValue>=8.5 && bmiValue<24.9)
      {
        setStatus("Normal");
      }
      else if(bmiValue>=25 && bmiValue<29.9)
      {
        setStatus("Over weight");
      }
      else
      {
        setStatus("Obese");
      }
    }
    
    else
    {
      setBmi("null");
      setStatus("");
    }

  }

  return (
    <>
      <div className="bmi_calc">
        <div className="box"></div>
        <div className="data">
          <h1>BMI Calculator</h1>
          <div className="input_data">
            <label htmlFor="height">Height:</label>
            <input type="text" id="height" onChange={(e)=>setHeight(e.target.value)}/>
          </div>
          <div className="input_data">
            <label htmlFor="weight">Weight:</label>
            <input type="text" id="weight" onChange={(e)=>setWeight(e.target.value)} />
          </div>
          <button onClick={calculateBmi}>Calculate BMI</button>
          <div className="result">
            <p>BMI is: {bmi}</p>
            <p>Status: {status}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
