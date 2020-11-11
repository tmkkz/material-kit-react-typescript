import { createStyles } from "@material-ui/core/styles";
import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  grayBackgroundColor,
} from "assets/jss/material-kit-react";

const badgeStyle = createStyles({
  badge: {
    marginRight: "3px",
    borderRadius: "12px",
    padding: "5px 12px",
    fontSize: "10px",
    fontWeight: 500,
    lineHeight: "1",
    color: "#fff",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "baseline",
    display: "inline-block",
  },
  primary: {
    backgroundColor: primaryColor,
  },
  warning: {
    backgroundColor: warningColor,
  },
  danger: {
    backgroundColor: dangerColor,
  },
  success: {
    backgroundColor: successColor,
  },
  info: {
    backgroundColor: infoColor,
  },
  rose: {
    backgroundColor: roseColor,
  },
  gray: {
    backgroundColor: grayBackgroundColor,
  },
  grayBackGround: {
    backgroundColor: grayColor,
  },
});

export default badgeStyle;
