import { useState } from 'react'
import { StyleSheet, TextInput, View, Button } from 'react-native'

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText)
  }

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText)
    setEnteredGoalText('')
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput 
          placeholder='Your Course Goal' 
          style={styles.textInput} 
          onChangeText={goalInputHandler}
          value={enteredGoalText}
          />
      <Button title='Add Goal' onPress={addGoalHandler}/>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    padding: 8
  }
})

export default GoalInput