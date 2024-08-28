import "../App.css";

const TrackList = ({
  tracks,
  setIsFormOpen,
  handleEdit,
  handleDelete,
  handlePlaying,
}) => {
  return (
    <>
      <div className="container">
        <h2 className="red">Track List</h2>
        <div className="track-list">
          {tracks.map((track) => (
            <div key={track._id} className="card">
              <div>
                <p>
                  {track.title} by <span className="red">{track.artist}</span>
                </p>
                <div className="buttons">
                  <button
                    onClick={() => {
                      setIsFormOpen(true);
                      handleEdit(track);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(track._id);
                    }}
                  >
                    Delete
                  </button>
                  <button onClick={() => handlePlaying(track)}>Play</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TrackList;
