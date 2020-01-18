import {useReducer} from 'react'

function reducer (state,action){
switch(action.type){
    case 'change':
    return state
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

export default function useFormControlState ({path,documentName}){
const [state,dispatch] =useReducer(reducer,{})

function onChange (e){


}

function update ({id,data}){


}

function remove ({id}){


}

function findById ({id}){

    
}

    return {state,onChange,update,remove,findById}

}