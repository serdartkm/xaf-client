import React from 'react'
import useFormControlState from '../useFormControlState'
export default function (){

    const {onChange, state}= useFormControlState({path:"",initialState:{firstname:"",lastname:""}})

    return (<div>
        <input onChange={onChange} value={state['firstname']} name ="fisrtname"/>
        <input onChange={onChange} value={state['lastname']} name ="lastname"/>

    </div>)
}