import {createStore,combineReducers} from 'redux'
import {calculationReducer} from '../Reducers/ClaculationReducer'

const rootReducer = combineReducers({
    calculationReducer
})

let Store = createStore(rootReducer)

export default Store