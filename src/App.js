import React, { useState, useRef } from "react";
import { Grid, Grow } from "@material-ui/core";
import marked from "marked";
import hljs from "highlight.js";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import TextEditor from "./components/TextEditor/Editor";
import MarkdownPreviewer from "./components/Previewer/MarkdownPreviewer";
import NavBar from "./components/NavBar/NavBar.js";
import { initialMarkdownText } from "./constants";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  const [text, setMarkdown] = useState(initialMarkdownText);
  const editorContainer = useRef(null);

  marked.setOptions({
    langPrefix: "hljs language-",
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    },
    breaks: true,
  });

  const renderMarkdown = (text) => {
    const __html = marked(text, { sanitize: true });
    return { __html };
  };

  const updateMarkdown = (text) => {
    setMarkdown(text);
  };

  const changeHandler = (event) => {
    setMarkdown(event.target.value);
  };

  const saveAsPDF = () => {
    const current = editorContainer.current;
    const mdPreviewElement = current.querySelector(".markdown-previewer");
    const filename = "newDocument.pdf";
    html2canvas(mdPreviewElement, { scale: 2 }).then((canvas) => {
      let pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 211, 298);
      pdf.save(filename);
    });
  };

  return (
    <div>
      <NavBar
        textReference={editorContainer}
        saveAsPDF={saveAsPDF}
        updateMarkdown={updateMarkdown}
      />
      <Grow in>
        <Grid
          className={classes.editorContainer}
          ref={editorContainer}
          container
          spacing={3}
        >
          <Grid item xs={12} sm={6}>
            <TextEditor text={text} onChange={changeHandler} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <MarkdownPreviewer renderMarkdown={renderMarkdown(text)} />
          </Grid>
        </Grid>
      </Grow>
    </div>
  );
};

export default App;
