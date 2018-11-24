import React, { useContext } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

import appContext from '../util/app-context'
import { complete, undo } from '../modules/todo'

const styles = StyleSheet.create({
  container: {
    padding: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 32,
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
  const store = useContext(appContext)

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>{props.isDone ? '✅' : ''}</Text>
      <Text
        style={[styles.action, props.isDone ? styles.done : null]}
        onPress={() => store.dispatch(invert(props))}
      >
        {props.action}
      </Text>
    </View>
  )
}
