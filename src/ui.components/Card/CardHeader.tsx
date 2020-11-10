import React, { ReactNode } from "react";
import { makeStyles } from "@material-ui/core/styles";
// nodejs library that concatenates classes
import classNames from "classnames";

import styles from "assets/jss/material-kit-react/components/cardHeaderStyle";

type CardHeaderColor = "primary" | "warning" | "danger" | "success" | "info";
const useStyles = makeStyles(styles);

export interface ICardHeaderProps {
  className?: string;
  color?: CardHeaderColor;
  plain?: boolean;
  children: ReactNode;
}

const CardHeader: React.FC<ICardHeaderProps> = (props: ICardHeaderProps) => {
  const classes = useStyles();
  const {
    className = "",
    children,
    color = "primary",
    plain = false,
    ...rest
  } = props;

  const cardHeaderClasses = classNames({
    [classes.cardHeader]: true,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    [classes[`${color}CardHeader`]]: color,
    [classes.cardHeaderPlain]: plain,
    [className]: className !== undefined,
  });
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  );
};

export default CardHeader;
