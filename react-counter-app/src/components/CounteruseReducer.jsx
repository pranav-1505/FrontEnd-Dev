import {useReducer} from "react";


export const CounteruseReducer =()=>{
    const CountReducer =(state, action)=>{
        switch (action.type) {
            case 'INCREMENT':
                return state+1
            case 'DECREMENT':
                return state-1
            case 'RESET':
                return  0
            default:
                return state
        }
     
    }

const[count, dispatch]= useReducer(CountReducer,  0 )
return (
<div className="counter-container">
    <h1 className="counter-heading">Counter App Using UseState</h1>
    <h1 className="counter-value">{count}</h1>
    <button className="counter-button increment" onClick={()=>dispatch({type: 'INCREMENT'})}>+</button>
    <button className="counter-button decrement" onClick={()=>dispatch({type: 'DECREMENT'})}>-</button>
    <button className="counter-button reset" onClick={()=>dispatch({type: 'RESET'})}>Reset</button>
</div>
)


}