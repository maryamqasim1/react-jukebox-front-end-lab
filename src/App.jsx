import { useEffect, useState } from "react";
import trackServe from "./services/trackService";
import TrackForm from "./components/TrackForm";

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const fetchedTracks = await trackServe.index;
        setTracks(fetchedTracks);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTracks();
  }, []);

  const handleAddTrack = async (formData) => {
    try {
      const newTrack = await trackServe.create(formData);
      setTracks(newTrack);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button
        onClick={() => {
          setIsFormOpen(true);
        }}
      >
        Add New Track
      </button>
      <div>
        {isFormOpen ? (
          <TrackForm handleAddTrack={handleAddTrack} />
        ) : (
          <>
            <h1>Track List</h1>
          </>
        )}
      </div>
    </>
  );
};

export default App;
