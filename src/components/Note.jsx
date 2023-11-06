import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import React from "react";

function Note(props) {
  // 用於設定圖示顏色的樣式物件
  const whiteIconStyle = { color: 'white' };

  // 處理點擊刪除按鈕的函數
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      {/* 筆記的標題 */}
      <h1>{props.title}</h1>

      {/* 筆記的內容 */}
      <p>{props.content}</p>

      {/* 刪除按鈕，並在點擊時呼叫 handleClick 函數 */}
      <button onClick={handleClick}><DeleteOutlineRoundedIcon style={whiteIconStyle}/></button>
    </div>
  );
}

export default Note;
