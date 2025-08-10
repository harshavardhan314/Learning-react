function Button() {

    // when we pass an argument we have enclose the callback in a function other wise by default it will invoke the function.call(this, args)
    const click=(name)=>console.log(`${name}`)

    // without parameter
    /*
    const click=()=>console.log("hello")
 return (
        <button onClick={click()}>click me</button>
    );
    */
    return (
        <button onClick={ ()=>click("HARSHA")}>click me</button>
    );
}
export default Button;