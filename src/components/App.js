import React from 'react'
import {
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native'
import Todos from './Todos'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
})

export default props => (
  <SafeAreaView style={styles.container}>
    <Todos todos={props.store} />
  </SafeAreaView>
)
