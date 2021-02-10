import React from "react";
import { Container } from "@material-ui/core";

const MarkdownPreviewer = ({ renderMarkdown }) => {
  return (
    <Container
      className="markdown-previewer"
      dangerouslySetInnerHTML={renderMarkdown}
    />
  );
};

export default MarkdownPreviewer;
