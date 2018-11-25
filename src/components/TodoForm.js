import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 8,
  },
  input: {
    flex: 4,
    fontSize: 32,
    height: 32,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
  },
  button: {
    flex: 1,
    marginLeft: 8,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    color: 'white',
    fontWeight: 'bold',
  },
})

export default props => {
  const [value, setValue] = useState('')

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={newValue => { setValue(newValue) }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => { props.actions.add(value) }}
      >
        <Text style={styles.buttonLabel}>add</Text>
      </TouchableOpacity>
    </View>
  )
}
