import { style } from "@vanilla-extract/css";

export const header = style({
  backgroundColor: "white",
  display: "flex",
});

export const tab = style({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "14px 0",
  borderBottom: "5px solid #b5b5b5",
  backgroundColor: "white",
  color: "#B5B5B5",
  selectors: {
    "&[aria-selected=true]": {
      borderBottom: "5px solid black",
      color: "black",
    },
  },
});

export const tabText = style({
  fontSize: "22px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "100%",
  marginLeft: "5px",
});

export const layout = style({
  display: "grid",
  gridTemplateRows: "auto 1fr auto",
  height: "100%",
  width: "100%",
  overflow: "hidden",
});

export const content = style({
  padding: "22px 20px",
  overflowY: "auto",
  overflowX: "hidden",
});

export const postBox = style({
  marginBottom: "24px",
  width: "100%",
  height: "auto",
  selectors: {
    "&:last-child": {
      marginBottom: "0",
    },
  },
});

export const postProfile = style({
  width: "100%",
  height: "30px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
});

export const userName = style({
  fontSize: "16px",
  fontWeight: 600,
  marginLeft: "10px",
});

export const date = style({
  flex: 1,
  textAlign: "end",
  marginRight: "10px",
  fontSize: "14px",
  fontWeight: 400,
  color: "#b8b8b8",
});

export const postContent = style({
  width: "100%",
  height: "fit-content",
  padding: "5px 10px",
  color: "#fff",
  backgroundColor: "black",

  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "150%",

  display: "-webkit-box",
  textOverflow: "ellipsis",
  wordWrap: "break-word",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
});

export const postImgContainer = style({
  width: "fit-content",
  maxHeight: "100%",
  margin: "0 auto",
  marginTop: "12px",
  boxShadow: "2px -4px",
});

export const postImg = style({
  width: "fit-content",
  maxWidth: "100%",
  maxHeight: "25dvh",
  border: "1px solid #000",
  objectFit: "scale-down",
});

export const metadataContainer = style({
  backgroundColor: "white",
  padding: "11px 0px",
  color: "black",
});

export const imageZoomIn = style({
  maxHeight: "80vh",
  maxWidth: "80vw",
  minHeight: "fit-content",
  minWidth: "fit-content",
});
