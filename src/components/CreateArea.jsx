import React, { useState } from "react";

function CreateArea(props) {
  const [state, setState] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  function addNote(event) {
    props.addNote(state);
    setState({ title: "", content: "" });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleChange} />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
        />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
