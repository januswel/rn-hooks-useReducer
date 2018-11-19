import React, { useContext } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

import appContext from '../app-context'
import { complete, undo } from '../modules/todo'

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
  action: {
    fontSize: 24,
    color: 'black',
  },
  done: {
    color: 'gray',
  },
})

const invert = todo => todo.isDone ? undo(todo.index) : complete(todo.index)

export default props => {
  const { dispatch } = useContext(appContext)

  return (
    <View style={styles.container}>
      <Text
        style={[styles.action, props.isDone ? styles.done : null]}
        onPress={() => dispatch(invert(props))}
      >
        {props.action}
      </Text>
    </View>
  )
}
