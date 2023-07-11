import React, { useState } from 'react'
import "./Dice.css"

function Dice({numDice, title, maxVal}) {
    const [numbers, setNumbers] = useState(Array.from({length: numDice}));
    const rollDice = ()=>{
        setNumbers(number=> number.map(n=>Math.floor(Math.random() * maxVal)+1))
    }
  return (
   <>
    <div className='main d-flex gap-3'>
        <h4 className='mt-3 fw-bold'>{title}</h4>
        <div className='d-flex justify-content-center gap-2'>
              {numbers.map((dice, i)=>(<div key={i} className="fw-bold bg-primary rounded text-white" style={{height: 25, width: 30}}>{dice}</div>))}
        </div>
    <button onClick={rollDice} type="button" className='btn btn-warning'>Roll</button>
    </div>
   </>
  )
}

export default Dice