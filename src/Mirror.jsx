import { useState } from "react"

function Mirror(){
    const [text,setText] = useState("")

    return(
        <>
        <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>{text}</p>      
        </>
    )
}
export default Mirror