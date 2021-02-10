import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgba(49, 65, 159, 1)",
    padding: "10px",
  },

  editorContainer: {
    flexGrow: 1,
    height: "100%",
  },
}));
