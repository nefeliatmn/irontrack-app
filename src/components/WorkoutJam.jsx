import { useState } from 'react';

function WorkoutJam({ onSelectSong, currentSong }) {
    const [term, setTerm] = useState('');
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(false);

    const searchMusic = async () => {
        if (!term) return;
        setLoading(true);
        try {
            const response = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(term)}&entity=song&limit=5`);
            const data = await response.json();
            setSongs(data.results || []);
        } catch (error) {
            console.error("Search error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section style={{ padding: '5px', border: '1px solid #764abc', borderRadius: '4px', background: '#1a1a1a', marginBottom: '10px' }}>
            <h3 style={{ color: '#fff', marginTop: '0px' }}>🎵 Workout Anthems</h3>
            <input
                type="text"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="Search songs..."
                style={{ padding: '6px', borderRadius: '4px' }}
            />
            <button onClick={searchMusic} disabled={loading} style={{ marginLeft: '10px' }}>
                {loading ? '...' : 'Search'}
            </button>

            <div style={{ display: 'flex', gap: '10px', marginTop: '15px', overflowX: 'auto' }}>
                {songs.map((song) => (
                    <div key={song.trackId} style={{ 
                        textAlign: 'center', 
                        width: '80px',
                        border: currentSong?.trackId === song.trackId ? '2px solid #a29bfe' : '1px solid #333',
                        padding: '5px',
                        borderRadius: '4px'
                    }}>
                        <img src={song.artworkUrl100} style={{ width: '60px', borderRadius: '4px' }} alt="" />
                        <p style={{ fontSize: '10px', color: '#fff', height: '20px', overflow: 'hidden' }}>{song.trackName}</p>
                        <button 
                            onClick={() => onSelectSong(song)}
                            style={{ fontSize: '10px', width: '100%' }}
                        >
                            {currentSong?.trackId === song.trackId ? '✅' : 'Select'}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default WorkoutJam;