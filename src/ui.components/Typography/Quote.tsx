import React, { ReactNode } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import styles from "assets/jss/material-kit-react/components/typographyStyle";

export interface QuoteProps {
  text: ReactNode;
  author: ReactNode;
}

const useStyles = makeStyles(styles);

const Quote: React.FC<QuoteProps> = (props: QuoteProps) => {
  const classes = useStyles();
  const { text, author } = props;

  return (
    <blockquote className={`${classes.defaultFontStyle} ${classes.quote}`}>
      <p className={classes.quoteText}>{text}</p>
      <small className={classes.quoteAuthor}>{author}</small>
    </blockquote>
  );
};

export default Quote;
