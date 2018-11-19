import React, { useContext } from 'react'
import {
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native'

import Todos from './Todos'
import appContext from '../app-context'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
})

export default props => {
  const { state } = useContext(appContext)

  return (
    <SafeAreaView style={styles.container}>
      <Todos todos={state} />
    </SafeAreaView>
  )
}
