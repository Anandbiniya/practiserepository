import '../App.css'
import { AuthContext } from '../context/AuthContext'
import {useContext} from 'react'
export const Display = () => {
    const {Auth,AuthToggle}=useContext(AuthContext)
    return (<div>
        <h4>Welcome , you login successfully done</h4>
        <h5>Token:- {Auth}</h5>
    </div>)
}