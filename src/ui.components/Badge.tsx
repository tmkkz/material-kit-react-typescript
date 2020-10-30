import React, { ReactElement, ReactNode } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/components/badgeStyle";
import { Colors } from "type";

const useStyles = makeStyles({ styles });

type BadgePropsType = {
  color: Colors;
  children: ReactNode;
};

const Badge = ({
  color = Colors.Gray,
  children,
}: BadgePropsType): ReactElement => {
  const classes = useStyles();
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <span className={`${classes.badge} ${classes[color]}`}>{children}</span>
  );
};

export default Badge;
