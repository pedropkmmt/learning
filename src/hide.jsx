import { useState } from "react"

function Hide(){
    const [dispay, setDispay] = useState(true)
    
    return(
        
        <>
        <button onClick={() => setDispay(!dispay)}>Toggle</button>
        {dispay &&
        <h1>On and Off</h1>
        }
        
        </>
    )
}
export default Hide

// function Hide(){
//     const [display, setDisplay] = useState(true)
    
//     return(
//         <>
//             <button onClick={() => setDisplay(!display)}>Toggle</button>
//             {display ? <h1>On and Off</h1> : null}
//         </>
//     )
// }
// function Hide(){
//     const [display, setDisplay] = useState(true)
    
//     return(
//         <>
//             <button onClick={() => setDisplay(!display)}>Toggle</button>
//             {display ? <h1>On and Off</h1> : <h1>Hidden</h1>}
//         </>
//     )
// }
// function Hide(){
//     const [display, setDisplay] = useState(true)
    
//     return(
//         <>
//             <button onClick={() => setDisplay(!display)}>Toggle</button>
//             {display ? <h1>On and Off</h1> : <h1>Hidden</h1>}
//         </>
//     )
// }
// function Hide(){
//     const [display, setDisplay] = useState(true)
    
//     return(
//         <>
//             <button onClick={() => setDisplay(!display)}>Toggle</button>
//             <h1 style={{visibility: display ? 'visible' : 'hidden'}}>
//                 On and Off
//             </h1>
//         </>
//     )
// }
// function Hide(){
//     const [display, setDisplay] = useState(true)
    
//     return(
//         <>
//             <button onClick={() => setDisplay(!display)}>Toggle</button>
//             {(() => {
//                 if (display) return <h1>On and Off</h1>
//                 return null
//             })()}
//         </>
//     )
// }