import React from 'react'
import {
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native'

import Todos from '../containers/Todos'
import TodoForm from './todo-form'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white',
  },
})

export default props => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>TODO list</Text>
    <Todos />
    <TodoForm />
  </SafeAreaView>
)
