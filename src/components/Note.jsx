import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import React from "react";

function Note(props) {
  const whiteIconStyle = { color: 'white' };
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><DeleteOutlineRoundedIcon style={whiteIconStyle}/></button>
    </div>
  );
}

export default Note;
