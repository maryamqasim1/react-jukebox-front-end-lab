import { useEffect, useState } from "react";
import trackService from "./services/trackService";
import TrackForm from "./components/TrackForm";
import TrackList from "./components/TrackList";

const App = () => {
  const [tracks, setTracks] = useState();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [edit, setEdit] = useState();

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const fetchedTracks = await trackService.index();
        setTracks(fetchedTracks);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTracks();
  }, []);

  const handleAdd = async (formData) => {
    const newData = await trackService.create(formData);
    setTracks([...tracks, newData]);
    setIsFormOpen(false);
  };

  const handleEdit = async (track) => {
    const newData = await trackService.update(track);
    setEdit(track);
  };

  const handleDelete = async (id) => {
    await trackService.deletee(id);
    location.reload()
    console.log(id);
  };

  if (!tracks) return <h1>Loading...</h1>;

  return (
    <>
      <div>
        {isFormOpen ? (
          <TrackForm
            handleAdd={handleAdd}
            edit={edit}
            handleEdit={handleEdit}
            setIsFormOpen={setIsFormOpen}
          />
        ) : (
          <>
            <button
              onClick={() => {
                setIsFormOpen(true);
              }}
            >
              Add New Track
            </button>
            <TrackList
              tracks={tracks}
              setIsFormOpen={setIsFormOpen}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </>
        )}
      </div>
    </>
  );
};

export default App;
