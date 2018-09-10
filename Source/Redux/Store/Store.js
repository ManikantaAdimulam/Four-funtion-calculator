import {createStore,combineReducers} from 'redux'
import {calculationReducer} from '../Reducers/CalculationReducer'

const rootReducer = combineReducers({
    calculationReducer
})

let Store = createStore(rootReducer)

export default Store