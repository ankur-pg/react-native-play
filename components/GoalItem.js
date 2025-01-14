import { StyleSheet, View, Text, Pressable } from 'react-native'

const GoalItem = (props) => {
  const deleteHandler = () => {
    props.onDeleteItem(props.id)
  }

  return (<Pressable 
              onPress={deleteHandler}
              android_ripple={{ color: '#210644' }}
              style={({pressed}) => pressed && styles.pressedEffect}
              >
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  </Pressable>)
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    borderRadius: 6,
  },
  goalText: {
    color: 'white'
  },
  pressedEffect: {
    opacity: 0.5
  }
})

export default GoalItem
