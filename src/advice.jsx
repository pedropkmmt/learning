import { useEffect, useState } from "react";
// Practing using api calls useState and useEffect
function Advice(){
const [advice, setAdvice] = useState("")
const [count, setCount] = useState(0)

    async function getAdvice(){
        const res = await fetch('https://api.adviceslip.com/advice')
        const data = await res.json();
        setAdvice(data.slip.advice)
        setCount((c) => c +1)
    }

    useEffect(function() {
        getAdvice()
    }, [])
    return(
        <>
        <h1>{advice}</h1>
        <button onClick={getAdvice}>Get Advice</button>
        <p>{count}</p>
        </>
    )
}
export default Advice 