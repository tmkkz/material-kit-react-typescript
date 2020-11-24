import { createStyles } from "@material-ui/core/styles";

const teamStyle = createStyles({
  section: {
    padding: "70px 0",
    textAlign: "center",
  },
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  title: {
    color: "#3C4858",
    margin: "1.75rem 0 0.875rem",
    textDecoration: "none",
    fontWeight: 700,
    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
  },
  cardTitle: {
    margin: "1.75rem 0 0.875rem",
    textDecoration: "none",
    fontWeight: 700,
    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
    color: "#6c757d",
    marginTop: ".625rem",
  },
  smallTitle: {
    color: "#6c757d",
  },
  description: {
    color: "#999",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  socials: {
    marginTop: 0,
    width: "100%",
    transform: "none",
    left: 0,
    top: 0,
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999",
  },
  margin5: {
    margin: "5px",
  },
});

export default teamStyle;
