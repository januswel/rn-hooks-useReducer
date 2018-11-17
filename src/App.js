import React from 'react'
import {
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native'
import Todos from './components/Todos'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
})

const todos = [
  {
    action: 'Remember the milk',
    isDone: true,
    key: `Remember the milk${new Date().getTime()}`,
  },
  {
    action: 'Use useReducer',
    isDone: false,
    key: `Use useReducer${new Date().getTime()}`,
  },
]

export default () => (
  <SafeAreaView style={styles.container}>
    <Todos
      todos={todos}
    />
  </SafeAreaView>
)
