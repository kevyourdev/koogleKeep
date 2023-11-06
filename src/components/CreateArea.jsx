import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import React, { useState } from "react";

// CreateArea 元件
function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  // 使用 useState 設定狀態變數，用於追蹤筆記的標題和內容
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  // 處理輸入框值變化的函數
  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  // 提交新筆記的函數
  function submitNote(event) {
    props.onAdd(note); // 呼叫父元件傳遞的 onAdd 函數，將筆記傳遞給父元件
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  // 展開筆記輸入框的函數
  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          // 標題輸入框，僅在展開時顯示
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="標題"
          />
        )}

        {/* 內容輸入框，支持展開功能 */}
        <textarea
          name="content"
          onClick={expand} // 點擊文本區域以展開
          onChange={handleChange}
          value={note.content}
          placeholder="記錄筆記..."
          rows={isExpanded ? 3 : 1} // 根據展開狀態調整行數
        />

        {/* 使用 Zoom 元件實現按鈕的縮放效果，僅在展開時顯示 */}
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
