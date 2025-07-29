import { use, useState } from "react";
import "./index.css"

function Steps(){
    //State should always be at the top of the component function 
    //UseState (useState) can't be placed in lower functions or if else statements
    // Always update state with setState not manually
 const [step, setSteps] = useState(1)
 const [display, setDisplay] = useState(true)   
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function handlePrevious(){
    if (step > 1) {
        setSteps(step - 1);
    }
    
}
function handleNext(){
    if (step < 3) {
        setSteps(step + 1);
    }
}
    return(
        <>
        {/* learn this carefully  */}
        <div onClick={() => setDisplay(!display)} className="close">&times;
        </div>
        {display &&
        <div className="steps">
            <div className="numbers">
                <div className={step >= 1 ? 'active' : ""}>1</div>
                <div className={step >= 2 ? 'active' : ""} >2</div>
                <div className={step >= 3 ? 'active' : ""}>3</div>
            </div>
        
        <p className="message">Step {step} {messages[step -1]}</p>

        <div className="buttons">
            <button onClick={handlePrevious} style={{backgroundColor: " #7950f2", color:"white"}} >Previous</button>
            <button  onClick={ handleNext} style={{backgroundColor: " #7950f2", color:"white"}}>Next</button>
        </div>
        </div>
}
            </>
    )
}
export default Steps