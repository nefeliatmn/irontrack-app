function WorkoutHistory({ History }) {
  return (
    <section style={{ marginTop: '20px' }}>
      <h2>Workout History</h2>
      
      {/* If history is empty, show a message */}
      {History.length === 0 && <p>No workouts saved yet. Go lift something!</p>}

      {History.map((workout) => (
        <div key={workout.id} style={{ 
            border: '1px solid #ddd', 
            padding: '10px', 
            marginBottom: '10px',
            borderRadius: '5px',
            backgroundColor: '#6e1b1b' 
        }}>
          <h3>{workout.name} — <small>{workout.date}</small></h3>
          
          <ul>
            {workout.sets.map((set, index) => (
              <li key={set.id}>
                Set {index + 1}: {set.weight}kg x {set.reps} reps
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default WorkoutHistory;