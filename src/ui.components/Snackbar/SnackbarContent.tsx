import React, { ReactElement } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Snack from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
// @material-ui/icons
import Close from "@material-ui/icons/Close";

import styles from "assets/jss/material-kit-react/components/snackbarContentStyle";
// core components

export interface ISnackbarProps {
  message: ReactElement;
  color?: "info" | "success" | "warning" | "danger" | "primary";
  close?: boolean;
  icon?: React.ComponentType<SvgIconProps> | string;
}

const useStyles = makeStyles(styles);

const SnackbarContent: React.FC<ISnackbarProps> = (props: ISnackbarProps) => {
  const { message, color = "info", close, icon } = props;
  const classes = useStyles();

  let snackIcon = null;
  switch (typeof icon) {
    case "object":
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      snackIcon = <props.icon className={classes.icon} />;
      break;
    case "string":
      snackIcon = <Icon className={classes.icon}>{props.icon}</Icon>;
      break;
    default:
      snackIcon = null;
      break;
  }

  let action: ReactElement[] = [];

  const [alert, setAlert] = React.useState<ReactElement | null>(
    <Snack
      message={
        <div>
          {snackIcon}
          {message}
          {close !== undefined ? action : null}
        </div>
      }
      classes={{
        root: `${classes.root} ${classes[color]}`,
        message: `${classes.message} ${classes.container}`,
      }}
    />
  );

  const closeAlert = () => {
    setAlert(null);
  };

  if (close !== undefined) {
    action = [
      <IconButton
        className={classes.iconButton}
        key="close"
        aria-label="Close"
        color="inherit"
        onClick={closeAlert}
      >
        <Close className={classes.close} />
      </IconButton>,
    ];
  }

  return alert;
};

export default SnackbarContent;
