import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import styles from "assets/jss/material-kit-react/components/typographyStyle";
import { TypographyProps } from "types";

const useStyles = makeStyles(styles);

const Muted: React.FC<TypographyProps> = (props: TypographyProps) => {
  const classes = useStyles();
  const { children } = props;

  return (
    <div className={`${classes.defaultFontStyle} ${classes.mutedText}`}>
      {children}
    </div>
  );
};

export default Muted;
