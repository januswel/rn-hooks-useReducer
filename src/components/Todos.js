import React from 'react'
import {
  FlatList,
} from 'react-native'
import Todo from './Todo'

export default props => (
  <FlatList
    data={props.state}
    renderItem={({item}) => <Todo {...item} />}
  />
)
