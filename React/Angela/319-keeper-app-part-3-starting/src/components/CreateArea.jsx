import React, { useState } from "react";
import Note from "./Note";

function CreateArea() {
  const [content, setContent] = useState({
    title: "",
    content: "",
  });

  const deleteNote = (id) => {
    setContentList((prev) => {
      return prev.filter((_, idx) => idx !== id);
    });
  };

  const [contentList, setContentList] = useState([]);

  const updateContent = (e) => {
    if (e.target.name === "title")
      setContent({
        title: e.target.value,
        content: content.content,
      });
    else
      setContent({
        title: content.title,
        content: e.target.value,
      });
  };

  const updateContentList = (e) => {
    setContentList((prev) => [...prev, content]);

    e.preventDefault();
  };

  return (
    <div>
      <h1>{content.title}</h1>
      <h1>{content.content}</h1>

      <form onSubmit={updateContentList}>
        <input onChange={updateContent} name="title" placeholder="Title" />
        <textarea
          onChange={updateContent}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button>Add</button>
      </form>

        {
          contentList.map((cont, idx) => {
            return (
              <Note
                key={idx}
                id={idx}
                title={cont.title}
                content={cont.content}
                onDelete={deleteNote}
              />
            );
          })
        }
    </div>
  );
}

export default CreateArea;
