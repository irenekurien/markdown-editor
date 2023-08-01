import React from "react";
import { IconButton } from "@material-ui/core";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import StrikethroughSIcon from "@material-ui/icons/StrikethroughS";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import CodeIcon from "@material-ui/icons/Code";
import InsertLinkIcon from "@material-ui/icons/InsertLink";
import ImageIcon from "@material-ui/icons/Image";

import {
  BOLD,
  ITALIC,
  STRIKETHROUGH,
  UNORDEREDLIST,
  ORDEREDLIST,
  BLCOCKQUOTE,
  LINK,
  IMAGE,
} from "./../../constants";

export const FormatingIcons = ({ textReference, updateMarkdown }) => {
  const getTextarea = () => {
    const current = textReference.current;
    const textarea = current.querySelector("textarea");
    return textarea;
  };

  const formatCode = () => {
    let newText = "`enter code here`";

    const textarea = getTextarea();
    const text = textarea.value;
    const startPos = textarea.selectionStart;
    const endPos = textarea.selectionEnd;
    const textBeforeCursor = text.substring(0, startPos);
    const textAfterCursor = text.substring(endPos, text.length);
    const lines = text.substring(0, startPos).split("\n");
    if (lines[lines.length - 1]) {
      if (startPos !== endPos) {
        let formaterBegin = "`";
        let formaterEnd = "`";
        const selectedText = text.slice(startPos, endPos);
        newText = `${formaterBegin}${selectedText}${formaterEnd}`;
      }
    } else {
      const formaterBegin = "```\n";
      const formaterEnd = "\n```";
      newText = `\n${formaterBegin}enter code here\n${formaterBegin}`;
      if (startPos !== endPos) {
        const selectedText = text.slice(startPos, endPos);
        newText = `${formaterBegin}${selectedText}${formaterEnd}`;
      }
    }
    const currentValue = `${textBeforeCursor}${newText}${textAfterCursor}`;
    textarea.value = currentValue;
    updateMarkdown(currentValue);
  };

  const formatText = (newText, formaterBegin, formaterEnd) => {
    const textarea = getTextarea();
    const text = textarea.value;
    const startPos = textarea.selectionStart;
    const endPos = textarea.selectionEnd;

    if (startPos !== endPos) {
      const selectedText = text.slice(startPos, endPos);
      newText = `${formaterBegin}${selectedText}${formaterEnd}`;
    }

    const textBeforeCursor = text.substring(0, startPos);
    const textAfterCursor = text.substring(endPos, text.length);

    let currentValue = null;

    if (formaterEnd)
      currentValue = `${textBeforeCursor}${newText}${textAfterCursor}`;
    else currentValue = `${textBeforeCursor}\n${newText}\n${textAfterCursor}`;

    textarea.value = currentValue;
    updateMarkdown(currentValue);
  };

  return (
    <div>
      <IconButton
        onClick={() => {
          formatText(BOLD, "**", "**");
        }}
        aria-label="bold"
      >
        <FormatBoldIcon size="medium" style={{ fill: "white" }} />
      </IconButton>
      <IconButton
        onClick={() => {
          formatText(ITALIC, "*", "*");
        }}
        aria-label="italic"
      >
        <FormatItalicIcon size="medium" style={{ fill: "white" }} />
      </IconButton>
      <IconButton
        onClick={() => {
          formatText(STRIKETHROUGH, "~~", "~~");
        }}
        aria-label="strikethrough"
      >
        <StrikethroughSIcon size="medium" style={{ fill: "white" }} />
      </IconButton>
      <IconButton
        onClick={() => {
          formatText(UNORDEREDLIST, "- ", "");
        }}
        aria-label="unordered list"
      >
        <FormatListBulletedIcon size="medium" style={{ fill: "white" }} />
      </IconButton>
      <IconButton
        onClick={() => {
          formatText(ORDEREDLIST, "1. ", "");
        }}
        aria-label="ordered list"
      >
        <FormatListNumberedIcon size="medium" style={{ fill: "white" }} />
      </IconButton>
      <IconButton
        onClick={() => {
          formatText(BLCOCKQUOTE, "> ", "");
        }}
        aria-label="block quote"
      >
        <FormatQuoteIcon size="medium" style={{ fill: "white" }} />
      </IconButton>
      <IconButton
        onClick={() => {
          formatCode();
        }}
        aria-label="code"
      >
        <CodeIcon size="medium" style={{ fill: "white" }} />
      </IconButton>

      <IconButton
        aria-label="link"
        onClick={() => {
          formatText(LINK, "", "");
        }}
      >
        <InsertLinkIcon size="medium" style={{ fill: "white" }} />
      </IconButton>

      <IconButton
        aria-label="image"
        onClick={() => {
          formatText(IMAGE, "", "");
        }}
      >
        <ImageIcon size="medium" style={{ fill: "white" }} />
      </IconButton>
    </div>
  );
};
