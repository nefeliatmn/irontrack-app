import React, { useState } from 'react';

function WorkoutHistory({History, deleteWorkout}) { 
  return (
    <section style={{ marginTop: '20px' }}>
      <h2>Workout History</h2>

      {/* Safety: If History is missing or empty, show this */}
      {(!History || History.length === 0) ? (
        <p>No workouts saved yet. Time to hit the gym!</p>
      ) : (
        History.map((workout) => (
          <div key={workout.id} style={{
            border: '1px solid #ddd',
            padding: '5px',
            marginBottom: '5px',
            borderRadius: '8px',
            backgroundColor: '#2a2a2a',
            color: 'white',
            textAlign: 'center',
            position: 'relative' // styling error: absolute positioning on the child button requires 'relative' on the parent to keep the button inside the card.

          }}>

            {/* Delete Button */}
            <button 
              onClick={() => {if(window.confirm("Are you sure you want to delete this workout?")) deleteWorkout(workout.id)}} // // why the change happened: triggers the delete function in App.jsx using this specific workout's ID.
              style={{
                position: 'absolute',
                top: '1px',
                right: '10px',
                background: '#ff4d4d',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                padding: '2px 5px'
              }}
            >
              Delete
            </button>

            <h3 style={{ margin: '0' }}>  <small style={{ color: '#aaa' }}>{workout.date}</small>{workout.totalVolume}</h3>

            {/* Song Display */}
            {workout.song && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '10px 0', padding: '5px', background: '#333', borderRadius: '4px' }}>
                <img src={workout.song.artworkUrl100} style={{ width: '30px', borderRadius: '2px' }} alt="" />
                <span style={{ fontSize: '12px', color: '#a29bfe' }}>
                   🎵 {workout.song.trackName} - {workout.song.artistName}
                </span>
              </div>
            )}
            {/* Macros Display 
            {workout.macros && (
              <div style={{ padding: '5px', background: '#333', borderRadius: '4px', marginTop: '10px' }}>
                <p style={{ margin: 0, fontSize: '12px', color: '#f1c40f' }}>
                  🍽️ Macros: {workout.macros.protein}g Protein, {workout.macros.carbs}g Carbs
                </p>
              </div>
            )}

*/}
            <ul style={{ marginTop: '10px' }}>
              {workout.sets && workout.sets.map((set, index) => (
                <li key={set.id} style={{ fontSize: '14px' }}>
                  Set {index + 1}: {set.weight}kg x {set.reps} reps
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </section>
  );
}

export default WorkoutHistory;