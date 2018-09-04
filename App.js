/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Main from './Source/Components/Main'
import Store from './Source/Redux/Store/Store'
export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Provider store={Store}>
        <Main />
      </Provider>
    )
  }
}
