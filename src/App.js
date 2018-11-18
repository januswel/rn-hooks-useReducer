import React from 'react'
import {
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native'
import Todos from './components/Todos'
import store from './store'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
})

export default () => (
  <SafeAreaView style={styles.container}>
    <Todos todos={store} />
  </SafeAreaView>
)
