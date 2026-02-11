import { useState } from 'react';

function PendingSession({ session, onSave, deleteExercise }) {
  if (session.length === 0) return null;

  // // why the change happened: Moved the export logic here so the component manages its own "Draft" actions.
  const handleExportDraft = () => {
    let csvContent = "Exercise,Weight,Reps,Volume\n";
    
    session.forEach(ex => {
      ex.sets.forEach((set, i) => {
        const name = i === 0 ? ex.name : "";
        csvContent += `${name},${set.weight},${set.reps},${ex.totalVolume},${ex.maxWeight}\n`;
      });
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Workout_Draft_${new Date().toLocaleDateString()}.csv`;
    link.click();

  };

  return (
    <div style={{ backgroundColor: '#1a1a1a', padding: '20px', borderRadius: '12px', border: '2px solid #349e2e', margin: '20px 0', textAlign: 'left' }}>
      
      <h3 style={{ color: '#349e2e', marginTop: 0 }}>📋 Pending Session</h3>
      
      {session.map((ex, idx) => (
        <div key={idx} style={{ borderBottom: '1px solid #333', padding: '10px 0' }}>
          <strong>{ex.name}</strong> — {ex.sets.length} sets completed - {ex.maxWeight}kg
          
           {/* Delete Button */}
            <button 
              onClick={() => {if(window.confirm("Are you sure you want to delete this exercise?")) deleteExercise(ex.id)}} 
              style={{
                position: '',
                top: '10px',
                right: '10px',
                background: '#ff5500',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                padding: '5px 10px'
              }}
            >
              Delete
            </button>
        </div>
        
      ))}

      <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
        <button 
          onClick={handleExportDraft} 
          style={{ flex: 1, padding: '10px', backgroundColor: '#349e2e', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        >
          📥 Export Draft
        </button>
        
        <button 
          onClick={onSave} 
          style={{ flex: 1, padding: '10px', backgroundColor: '#f1c40f', color: '#000', fontWeight: 'bold', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        >
          ✅ Save to History
        </button>
      </div>
    </div>
  );
}

export default PendingSession;