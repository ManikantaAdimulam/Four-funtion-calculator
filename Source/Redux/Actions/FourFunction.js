/**
 *  Four functions
 */
export const FourFunctions = {
  ADD: 'ADD',
  SUBTRACT: 'SUBTRACT',
  MULTIPLY: 'MULTIPLY',
  DIVISION: 'DIVISION',
  PRESS: 'PRESS',
  EQUAL: 'EQUAL',
  CLEAR: 'CLEAR'
}

/**
 * Four function action
 */
export const FourFunctionActions = {
  add: (values) => {
    return { type: FourFunctions.ADD, values }
  },
  subtract: (values) => {
    return { type: FourFunctions.SUBTRACT, values }
  },
  multiply: (values) => {
    return { type: FourFunctions.MULTIPLY, values }
  },
  division: (values) => {
    return { type: FourFunctions.DIVISION, values }
  },
  press: (value) => {
    return { type: FourFunctions.PRESS, value }
  },
  equal: (value) => {
    return { type: FourFunctions.EQUAL, value }
  },
  clear: (value) => {
    return { type: FourFunctions.CLEAR, value }
  }
}
