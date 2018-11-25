import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

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

export default props => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>{props.isDone ? '✅' : ''}</Text>
      <Text
        style={[styles.action, props.isDone ? styles.done : null]}
        onPress={() => {
          props.isDone
            ? props.actions.undo(props.index)
            : props.actions.complete(props.index)
        }}
      >
        {props.action}
      </Text>
    </View>
  )
}
