import { useState } from "react"

function TextToggle(){
   const [text, setText] = useState(true)
   const [color, setColor] = useState(true)
    return(
        <>
        <button onClick={() => setText(!text)}>
            {text ? "Stop" : "Start"}
        </button>
        <button onClick={() => setColor(!color)  } style={{backgroundColor: "yellow"}}>Yellow</button>
        <button style={{backgroundColor: "blue"}}>Blue</button>
        <button style={{backgroundColor: "red"}}>Red</button>
        <div>{color}Text</div>
        </>
    )
}
export default TextToggle