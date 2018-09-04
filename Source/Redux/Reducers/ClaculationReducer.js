import {FourFunctions} from '../Actions/FourFunction'

const initialState = {
  displayValues: 0,
  result: 0
}

export function calculationReducer(state=initialState, action){
    switch(action.type){
        case FourFunctions.ADD:
        return {

        }
        case FourFunctions.SUBTRACT:
        return {

        }
        case FourFunctions.MULTIPLY:
        return {

        }
        case FourFunctions.DIVISION:
        return {

        }
        case FourFunctions.PRESS:
        // console.log(state)
        return {
            ...state,
            displayValues: action.value
        }
        default:
        return {...state}
    }
}