import React from 'react'
import {
  FlatList,
  StyleSheet,
} from 'react-native'

import Todo from '../components/Todo'

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
})

export default props => (
  <FlatList
    style={styles.container}
    data={props.todos}
    renderItem={
      ({item, index}) => <Todo {...item} index={index} actions={props.actions} />
    }
  />
)
