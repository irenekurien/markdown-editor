import React from "react";
import { Container } from "@material-ui/core";

export const MarkdownPreviewer = ({ renderMarkdown }) => {
  return (
    <Container
      className="markdown-previewer"
      dangerouslySetInnerHTML={renderMarkdown}
    />
  );
};
