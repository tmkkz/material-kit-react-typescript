import React, { ReactNode } from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/badgeStyle";
import { Colors } from "types";

// type BadgeBackGround = Colors & "gray" & "badge";

export interface IBadgeProps {
  color: Colors;
  children: ReactNode;
}

const useStyles = makeStyles(styles);

const Badge: React.FC<IBadgeProps> = ({
  color = "gray" as Colors,
  children,
}: IBadgeProps) => {
  const classes = useStyles();
  return (
    <span className={`${classes.badge} ${classes[color]}`}>{children}</span>
  );
};

export default Badge;
