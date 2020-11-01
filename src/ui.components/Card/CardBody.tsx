import React, { ReactNode } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

import cardBodyStyles from "assets/jss/material-kit-react/components/cardBodyStyle.js";

export interface ICardBodyProps {
  className: string;
  children: ReactNode;
}

const CardBody: React.FC<ICardBodyProps> = (props: ICardBodyProps) => {
  const classes = cardBodyStyles();
  const { className, children, ...rest } = props;
  const cardBodyClasses = classNames({
    [classes.cardBody]: true,
    [className]: className !== undefined,
  });

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
};

export default CardBody;
