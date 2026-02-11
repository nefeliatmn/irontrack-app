function MacroCoach({ sets }) {
    // FIX: We ensure we always have an array so the app doesn't crash
    const safeSets = sets || [];

    // 1. Calculate Total Volume using safeSets
    const totalVolume = safeSets.reduce((acc, set) => {
        const weight = parseFloat(set.weight) || 0;
        const reps = parseInt(set.reps) || 0;
        return acc + (weight * reps);
    }, 0);

    // 2. Nutrition Science Logic (Same as before)
    const suggestedProtein = totalVolume > 0 ? (20 + (totalVolume / 1000) * 2).toFixed(1) : 0;
    const suggestedCarbs = totalVolume > 0 ? ((totalVolume / 500) * 10).toFixed(1) : 0;

    return (
        <div style={{ 
            background: '#1e272e', 
            padding: '15px', 
            borderRadius: '8px', 
            border: '1px solid #2ecc71',
            marginTop: '20px',
            color: '#fff'
        }}>
            <h3 style={{ color: '#2ecc71', marginTop: 0 }}>🍎 Post-Workout Fuel Target</h3>
            
            <div style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
                <div>
                    <p style={{ fontSize: '12px', margin: 0, color: '#aaa' }}>Total Volume</p>
                    <strong style={{ fontSize: '18px' }}>{totalVolume} kg</strong>
                </div>
                <div>
                    <p style={{ fontSize: '12px', margin: 0, color: '#aaa' }}>Protein</p>
                    <strong style={{ fontSize: '18px', color: '#3498db' }}>{suggestedProtein}g</strong>
                </div>
                <div>
                    <p style={{ fontSize: '12px', margin: 0, color: '#aaa' }}>Carbs</p>
                    <strong style={{ fontSize: '18px', color: '#f1c40f' }}>{suggestedCarbs}g</strong>
                </div>
            </div>
            
            <p style={{ fontSize: '11px', fontStyle: 'italic', marginTop: '10px', color: '#888' }}>
                *Based on anabolic window requirements for {totalVolume}kg TTV.
            </p>
        </div>
    );
}

export default MacroCoach; 