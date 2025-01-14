import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const startAddGoalHandler = () => {
    setModalIsVisible(true)
  }

  const endAddGoalHandler = () => {
    setModalIsVisible(false)
  }

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, {
      text: enteredGoalText,
      id: `${Math.random().toString(36).substr(2, 9)}-${Date.now()}`
    }])
    setModalIsVisible(false)
  }

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    })
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button title='Add new Goal' color='#5e0acc' onPress={startAddGoalHandler}/>
        {modalIsVisible && <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onEndAddGoal={endAddGoalHandler} />}
        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals} 
          keyExtractor={(item, index) => {
            return item.id
          }}
          renderItem={(itemData) => {
            return <GoalItem 
                      text={itemData.item.text} 
                      onDeleteItem={deleteGoalHandler} 
                      id={itemData.item.id}
                      />
          }}/>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  },
  goalsContainer: {
    flex: 5
  }
});
