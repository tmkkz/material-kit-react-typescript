import React, { ReactNode } from "react";
import { makeStyles } from "@material-ui/core/styles";
// nodejs library that concatenates classes
import classNames from "classnames";

import styles from "assets/jss/material-kit-react/components/cardFooterStyle";

const useStyles = makeStyles(styles);

export interface ICardFooterProps {
  className?: string;
  children: ReactNode;
}

const CardFooter: React.FC<ICardFooterProps> = (props: ICardFooterProps) => {
  const classes = useStyles();
  const { className = "", children, ...rest } = props;
  const cardFooterClasses = classNames({
    [classes.cardFooter]: true,
    [className]: className !== undefined,
  });

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={cardFooterClasses} {...rest}>
      {children}
    </div>
  );
};

export default CardFooter;
