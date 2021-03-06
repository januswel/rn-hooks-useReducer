import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
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

export default props => (
  <TouchableOpacity onPress={() => {
    props.isDone
      ? props.actions.undo(props.index)
      : props.actions.complete(props.index)
  }}>
    <View style={styles.container}>
      <Text style={styles.icon}>{props.isDone ? '✅' : ''}</Text>
      <Text style={[styles.action, props.isDone ? styles.done : null]}>
        {props.action}
      </Text>
    </View>
  </TouchableOpacity>
)
