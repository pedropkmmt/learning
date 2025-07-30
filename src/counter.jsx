import { useState } from 'react'
import './counter.css'

function Counter(){
const [step, setSteps] = useState(1)
const [count, setCount] = useState(0)
const date = new Date();
date.setDate(date.getDate() + count)

function StepPlus(){
    setSteps(step + 1)
}
function StepMinus(){
    setSteps(step - 1)
}
function CountPlus(){
    setCount(count + step)
}
function CountMinus(){
    setCount(count - step)
}
    return(
        <>
        <div className='center'>
        <div className='step'>
        <button onClick={StepMinus}>minus</button><span>Step:{step}</span><button onClick={StepPlus}>add</button>
        </div>
        <div className='count'>
        <button onClick={CountMinus}>minus</button><span>Count{count}</span><button onClick={CountPlus}>add</button>
        </div>
        <p className='message'>{date.toDateString()}<span>{count === 0 ? "is Today " : count === 1 ? "is Tomorrow " : count > 1 ? `is in ${count} days`: count < 0 ? `was ${Math.abs(count)} days ago` : ""}</span> </p>
        </div>
        </>
    )
}
export default Counter