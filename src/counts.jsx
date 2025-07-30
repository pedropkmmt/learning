import { useState } from "react"

function Add(){
    const [count, setCount] = useState(0)
    return(
        <>
        <button onClick={() => setCount(count + 1)}>add</button>
        <button onClick={() => setCount(count - 1)}>minus</button>
        <button onClick={() => setCount(0)}>reset</button>
        <p>{count}</p>
        </>
    )
}
export default Add