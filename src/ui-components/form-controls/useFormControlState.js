import {useReducer, useEffect} from 'react'

function reducer (state,action){
debugger;
switch(action.type){
    case 'change':
    return {...state, [action.payload.name]:action.payload.value}
    case 'update':
    return state
    case 'delete':
        return state
    case 'insert':
        return state
        case 'select':
        return state
    case 'find':
        return state;
    default:
        throw new Error();
}

}

export default function useFormControlState ({path,documentName, initialState}){
const [state,dispatch] =useReducer(reducer,initialState)

useEffect(()=>{
    const tempstatus =state
    debugger;
},[state])
function onChange (e){
    const {name,value} =e.target
    debugger;
dispatch({type:'change', payload:{name,value}})

}

function update ({id,data}){
//fetch

}

function remove ({id}){


}

function findById ({id}){

    
}

    return {state,onChange,update,remove,findById}

}