import { useEffect, useState } from "react";

const TrackForm = ({ handleAdd, edit, track, handleEdit, setIsFormOpen }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (edit) {
      console.log(edit);
      setFormData(edit);
    }
  }, [edit]);

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (edit) {
      handleEdit(formData);
      setIsFormOpen(false);
      location.reload()
    } else handleAdd(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="artist">Artist:</label>
          <input
            type="text"
            id="artist"
            name="artist"
            value={formData.artist}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default TrackForm;
