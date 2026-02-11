import { useState } from 'react';
import MacroCoach from './MacrosCoach';

function ActiveWorkout({ onFinish }) {
    const [exercise, setExercise] = useState("");
    const [sets, setSets] = useState([]);
    const [currentSong, setCurrentSong] = useState(null);
    const [macros, setMacros] = useState({ protein: 0, carbs: 0 });
    // --- LOGIC ZONE (Functions go here) ---


    const addSet = () => {
        const newSet = {
            id: Date.now(),
            weight: 0,
            reps: 0
        };
        setSets([...sets, newSet]);
    };

    const deleteSet = (id) => {
        console.log("Deleting set with ID:", id); // This will show up in your Inspect -> Console
        const filteredSets = sets.filter((set) => set.id !== id);
        setSets(filteredSets);
    };

    const updateSet = (id, field, value) => {
        const updatedSets = sets.map((set) => {
            if (set.id === id) {
                return { ...set, [field]: value };
            } else {
                return set;
            }
        });
        setSets(updatedSets);
    };

    const handleFinish = () => {
        if (sets.length === 0) return alert("Please add at least one set before finishing the workout.");

        const totalVolume = sets.reduce((acc, set) => {
            const weight = parseFloat(set.weight) || 0;
            const reps = parseInt(set.reps) || 0;
            return acc + (weight * reps);
        }, 0);
        const maxWeight = sets.reduce((max, set) => {
            const weight = parseFloat(set.weight) || 0;
            return weight > max ? weight : max;
        }, 0);
        const suggestedProtein = totalVolume > 0 ? (20 + (totalVolume / 1000) * 2).toFixed(1) : 0;
        const suggestedCarbs = totalVolume > 0 ? ((totalVolume / 500) * 10).toFixed(1) : 0;

        const workoutSummary = {
            id: Date.now(),
            name: exercise,
            date: new Date().toLocaleDateString(),
            sets: sets,
            totalVolume: totalVolume,
            maxWeight: maxWeight,
            song: currentSong,
            macros: {
                protein: suggestedProtein,
                carbs: suggestedCarbs
            }
        };

        onFinish(workoutSummary);
        setExercise("");
        setSets([]);


    }

    // --- VISUAL ZONE (JSX goes here) ---
    return (
        <section style={{ border: '1px solid #444', padding: '10px', borderRadius: '4px' }}>
            <h2>New Exercise</h2>

            <input
                type="text"
                value={exercise}
                onChange={(e) => setExercise(e.target.value)}
                placeholder="Exercise Name (e.g. Squat)"
            />

            <button onClick={addSet} style={{ marginLeft: '10px'
            
             }}>
                + Add Set
            </button>
            <div style={{ marginTop: '5px' }}>
                {/* We use .map() here to turn our data into HTML */}
                {sets.map((set, index) => (
                    <div key={set.id} style={{ marginBottom: '10px' }}>
                        <strong>Set {index + 1}: </strong>
                        <input
                            type="number"
                            placeholder="kg"
                            style={{ width: '60px' }}
                            onChange={(e) => updateSet(set.id, 'weight', e.target.value)}
                        /> x
                        <input
                            type="number"
                            placeholder="reps"
                            style={{ width: '60px' }}
                            onChange={(e) => updateSet(set.id, 'reps', e.target.value)}
                        />
                        <button
                            onClick={() => deleteSet(set.id)}
                            style={{ color: 'red', border: 'px solid red' }}
                        >
                            Delete
                        </button>


                    </div>
                ))}
                <button onClick={handleFinish} style={{ marginLeft: '10px', backgroundColor: 'green', color: 'white' }}>
                    Finish & Save Exercise
                </button>
            </div>
        </section>
    );
}

export default ActiveWorkout;