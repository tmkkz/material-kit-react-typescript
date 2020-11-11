import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
// core components
import styles from "assets/jss/material-kit-react/components/customLinearProgressStyle";
import { Colors } from "types";

type ColorsPlusGray = Colors & "gray";

export interface ICustomLinerProgressProps {
  color: ColorsPlusGray;
}
const useStyles = makeStyles(styles);

const CustomLinearProgress: React.FC<ICustomLinerProgressProps> = (
  props: ICustomLinerProgressProps
) => {
  const classes = useStyles();
  const { color, ...rest } = props;
  return (
    <LinearProgress
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      classes={{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        root: `${classes.root} ${classes[`${color}Background`]}`,
        bar: `${classes.bar} ${classes[color]}`,
      }}
    />
  );
};

export default CustomLinearProgress;
