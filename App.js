import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, {
      text: enteredGoalText,
      id: `${Math.random().toString(36).substr(2, 9)}-${Date.now()}`
    }])
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} 
        keyExtractor={(item, index) => {
          return item.id
        }}
        renderItem={(itemData) => {
          return <GoalItem text={itemData.item.text}/>
        }}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5
  }
});
