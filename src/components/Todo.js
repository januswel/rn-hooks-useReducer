import React, { useContext } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { appContext } from '../containers/App'
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

export default props => {
  const { dispatch } = useContext(appContext)

  return (
    <View style={styles.container}>
      <Text
        style={[styles.action, props.isDone ? styles.done : null]}
        onPress={() => dispatch(complete(props.index))}
      >
        {props.action}
      </Text>
    </View>
  )
}
