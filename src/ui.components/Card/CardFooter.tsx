import React, { ReactNode } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

import cardFooterStyles from "assets/jss/material-kit-react/components/cardFooterStyle.js";

interface ICardFooterProps {
  className: string;
  children: ReactNode;
}

const CardFooter: React.FC<ICardFooterProps> = (props: ICardFooterProps) => {
  const classes = cardFooterStyles();
  const { className, children, ...rest } = props;
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
