/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { Button, Dispaly } from '../Components'
import { FourFunctionActions } from '../Redux/Actions/FourFunction'
import connect from 'react-redux/lib/connect/connect'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numbers: [
        '1',
        '2',
        '3',
        '+',
        '4',
        '5',
        '6',
        '-',
        '7',
        '8',
        '9',
        '/',
        '0',
        'C',
        '=',
        'X'
      ],
      lastEvent: '',
      operations: ['+', '-', 'X', '/', '=']
    }
    this.onPress = this.onPress.bind(this)
    this.values = ''
    this.events = []
  }

  onPress = (event) => {
    this.setEvent(event)
  }
  setEvent = (event) => {
    if (this.state.operations.indexOf(event) != -1) {
      if (this.state.lastEvent != event) {
        this.setState({ lastEvent: event }, () => {
          this.performOperation(this.state.lastEvent, event)
        })
      }
    } else {
      this.performOperation(event, event)
      if (this.state.lastEvent != '') {
        this.performOperation(this.state.lastEvent, '')
        this.setState({ lastEvent: '' })
      }
    }
  }
  performOperation = (event, val) => {
    const { dispatch } = this.props
    switch (event) {
      case '+':
        dispatch(FourFunctionActions.add(val))
        return
      case '-':
        dispatch(FourFunctionActions.subtract(val))
        return
      case 'X':
        dispatch(FourFunctionActions.multiply(val))
        return
      case '/':
        dispatch(FourFunctionActions.division(val))
        return
      case 'C':
        dispatch(FourFunctionActions.clear(event))
        return
      case '=':
        // this.setState({lastEvent: event})
        dispatch(FourFunctionActions.equal(event))
        return
      default:
        dispatch(FourFunctionActions.press(event))
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Dispaly
          values={this.props.display.displayValues}
          result={this.props.display.result}
        />
        <View style={styles.buttonsView}>
          <View style={styles.buttonsInnerView}>
            {this.state.numbers.map((number) => {
              return (
                <Button
                  title={number}
                  key={number}
                  onPress={() => {
                    this.onPress(number)
                  }}
                />
              )
            })}
          </View>
        </View>
      </View>
    )
  }
}
const mapStateToProps = (state) => ({
  display: state.calculationReducer
})

export default connect(mapStateToProps)(Main)

const { height, width } = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 20
  },
  buttonsView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonsInnerView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})
