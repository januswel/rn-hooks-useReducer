import React, { useContext } from 'react'
import {
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native'
import Todos from './Todos'
import { context } from '../containers/App'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
})

export default props => {
  const { state } = useContext(context)

  return (
    <SafeAreaView style={styles.container}>
      <Todos todos={state} />
    </SafeAreaView>
  )
}
