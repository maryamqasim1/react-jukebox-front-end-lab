const TrackList = ({ tracks, setIsFormOpen, handleEdit, handleDelete }) => {
  return (
    <>
      <h1>Track List</h1>
      {tracks.map((track) => (
        <div key={track._id}>
          <div>
            <p>
              {track.title} by {track.artist}
            </p>
            <button
              onClick={() => {
                setIsFormOpen(true);
                handleEdit(track) 
              }}
            >
              Edit
            </button>
            <button onClick={() => {handleDelete(track._id)}}>Delete</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default TrackList;
