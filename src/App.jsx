import './App.css'
import { useState, useEffect } from 'react';
import ActiveWorkout from './components/ActiveWorkout'
import WorkoutHistory from './components/WorkoutHistory'
import WorkoutJam from './components/WorkoutJam'
import MacroCoach from './components/MacrosCoach'
import PendingSession from './components/PendingSession';

function App() {
  const [History, setHistory] = useState([]);
  const [pendingSessionData, setPendingSessionData] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);

  useEffect(() => {
    const restoredSession = JSON.parse(localStorage.getItem("session"));
    if (restoredSession) setHistory(restoredSession);
  }, []);

  const addExerciseToPending = (newExercise) => {
    const exerciseWithSong = { ...newExercise, song: selectedSong };
    setPendingSessionData([...pendingSessionData, exerciseWithSong]);
  };

  const deleteExercise = (id) => {
    const updatedSession = pendingSessionData.filter(ex => ex.id !== id);
    setPendingSessionData(updatedSession);
  }

  const saveFullWorkout = () => {
    if (pendingSessionData.length === 0) return;
    const fullWorkout = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      exercises: pendingSessionData,
      song: selectedSong
    };
    const updatedHistory = [...History, fullWorkout];
    setHistory(updatedHistory);
    localStorage.setItem("session", JSON.stringify(updatedHistory));
    setPendingSessionData([]);
    setSelectedSong(null);
  };
  const deleteWorkout = (id) => {
    const updatedHistory = History.filter((workout) => workout.id !== id);
    setHistory(updatedHistory)
    localStorage.setItem("session", JSON.stringify(updatedHistory));
  }


  const handleResetApp = () => {
    if (window.confirm("Are you sure you want to delete everything?")) {
      localStorage.removeItem("session");
      setHistory([]);
    }
  };


  return (
    <div className="App">
      <h1> IronTrack 🏋️</h1>

      <ActiveWorkout onFinish={addExerciseToPending} currentSong={selectedSong} />
      <MacroCoach sets={pendingSessionData.flatMap(ex => ex.sets)} />

      <PendingSession
        session={pendingSessionData}
        onSave={saveFullWorkout}
        deleteExercise={deleteExercise}
      />
      <br/>           
      <WorkoutJam onSelectSong={setSelectedSong} currentSong={selectedSong} />

      <WorkoutHistory
        History={History}
        deleteWorkout={deleteWorkout}
      />

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
        marginTop: '20px',
        marginBottom: '40px'
      }}>
        <button onClick={handleResetApp} style={{ padding: '8px 16px', backgroundColor: 'transparent', color: '#ff4d4d', border: '1px solid #ff4d4d', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>
          Reset All Data
        </button>
      </div>
    </div>

  );
}

export default App;