import React, { ReactNode } from "react";

import badgeStyles from "assets/jss/material-kit-react/components/badgeStyle";
import { Colors } from "types";

type BadgeBackGround = Colors & "badge";

export interface IBadgeProps {
  color: BadgeBackGround;
  children: ReactNode;
}

const Badge: React.FC<IBadgeProps> = ({
  color = "gray" as BadgeBackGround,
  children,
}: IBadgeProps) => {
  const classes = badgeStyles();
  return (
    <span className={`${classes.badge} ${classes[color]}`}>{children}</span>
  );
};

export default Badge;
