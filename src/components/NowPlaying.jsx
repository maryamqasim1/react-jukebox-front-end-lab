const NowPlaying = ({ handlePlaying, nowPlaying }) => {
  if (nowPlaying) {
    return (
      <>
        <div className="nowPlay">
          <div className="card playCard">
            <h2 className="red">Now Playing:</h2>
            <p><span className="golden">Title: </span>{nowPlaying.title}</p>
            <p><span className="golden">Artist: </span>{nowPlaying.artist}</p>
          </div>
        </div>
      </>
    );
  }
};

export default NowPlaying;
