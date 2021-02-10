import React from "react";
import { Container, TextareaAutosize } from "@material-ui/core";

const TextEditor = ({ text, onChange }) => {
  return (
    <Container>
      <TextareaAutosize
        defaultValue={text}
        className="markdown-input"
        rowsMin={50}
        onBlur={onChange}
        onChange={onChange}
      />
    </Container>
  );
};

export default TextEditor;
