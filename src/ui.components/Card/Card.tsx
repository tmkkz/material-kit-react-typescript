import React, { ReactNode } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// core components
import cardStyles from "assets/jss/material-kit-react/components/cardStyle.js";

export interface ICardProps {
  className: string;
  plain: boolean;
  carousel: boolean;
  children: ReactNode;
}

const Card: React.FC<ICardProps> = (props: ICardProps) => {
  const classes = cardStyles();
  const { className, children, plain, carousel, ...rest } = props;
  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardCarousel]: carousel,
    [className]: className !== undefined,
  });
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
}

export default Card;
