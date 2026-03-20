const Events = ()=>{
    const clickMe = ()=>{
        alert('I was clicked');
    }

    /*In the Events Functional component, in the return, 
    create an input tag that has an onKeyDown event handler, 
    that listens to a function called handleKeyDown.*/
    const handleKeyDown=()=>{

    }

    return (
        <>
            <button onClick={clickMe}>Click me</button>
            <input type="text" onKeyDown={handleKeyDown} />
        </>
    )
}
export default Events