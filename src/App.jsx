import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/ActiveWorkout'
import './components/WorkoutHistory'
import ActiveWorkout from './components/ActiveWorkout'
import WorkoutHistory from './components/WorkoutHistory'

const workoutExample = {
  id: "uuid-123",
  date: "2024-05-20",
  exerciseName: "Bench Press",
  sets: [
    {
      setNumber: 1,
      weight: 60, // in kg
      reps: 10,
      completed: true // What else is vital for "Progressive Overload"?
    },
  ],
  totalVolume: 600, // weight * reps
  notes: "Feeling strong today"
};

function App() {
  const [History, setHistory] = useState([]);

  const addWorkoutToHistory = (newWorkout) => {
    setHistory([...History, newWorkout]);
  };

  return (
    <div className="App">
      <h1> IronTrack 🏋️</h1>
      <ActiveWorkout onFinish={addWorkoutToHistory} />
      <WorkoutHistory History={History} />
    </div>
  )
}

export default App;