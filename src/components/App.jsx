// 引入React庫和useState，用於建立狀態變數
import React, { useState } from "react";

// 引入自定義組件
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

function App() {
  // 使用useState來宣告名為"notes"的狀態變數，並初始化為一個空陣列
  const [notes, setNotes] = useState([]);

  // 定義一個函數"addNote"，用於將新筆記添加到"notes"狀態變數
  function addNote(newNote) {
    // 使用setNotes函數更新"notes"狀態，將新筆記添加到先前的筆記陣列中
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  // 定義一個函數"deleteNote"，用於刪除指定ID的筆記
  function deleteNote(id) {
    // 使用setNotes函數更新"notes"狀態，過濾掉具有指定ID的筆記
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      {/* render Header組件 */}
      <Header />
      
      {/* render CreateArea組件，並將"addNote"函數傳遞為"onAdd"屬性 */}
      <CreateArea onAdd={addNote} />
      
      {/* 透過map函數，將"notes"陣列中的每個筆記render為Note組件 */}
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote} // 傳遞"deleteNote"函數作為"onDelete"屬性
          />
        );
      })}
      
      {/* render Footer組件 */}
      <Footer />
    </div>
  );
}

export default App;

