function Example(props){
    if (props.isLoggedin == true){
    return(
        <>
        <h2>Name: {props.name}</h2>
        <h2>Age: {props.age}</h2>
        </>
    )
}
return(
    <h1>LogIn</h1>
)
}
export default Example