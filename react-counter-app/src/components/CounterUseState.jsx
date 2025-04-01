import React, { useState } from "react";

function CounterUseState(){
    const[count, setCount]=useState(0)

    const increment = () =>setCount(count +1)
    const decrement = () => setCount(prevCount => Math.max(prevCount - 1, 0));
    const Reset = () => setCount(0)
    

    return(
<div className="counter-container">
    <h1 className="counter-heading">Counter App Using UseState</h1>
    <h1 className="counter-value">{count}</h1>
    <button className="counter-button increment" onClick={increment}>+</button>
    <button className="counter-button decrement" onClick={decrement}>-</button>
    <button className="counter-button reset" onClick={Reset}>Reset</button>
</div>
    )
}
export default CounterUseState;