import {useState} from 'react'

// components reausble peace od code;
function Button(props){
    return (
     <button key={props.key} onClick={props.onClick}>
         {props.label}
     </button>

 )
}
export default Button