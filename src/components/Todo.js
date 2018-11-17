import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

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

export default props => (
  <View style={styles.container}>
    <Text style={[styles.action, props.isDone ? styles.done : null]}>
      {props.action}
    </Text>
  </View>
)
