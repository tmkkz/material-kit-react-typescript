import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress, {
  LinearProgressProps,
} from "@material-ui/core/LinearProgress";
// core components
import styles from "assets/jss/material-kit-react/components/customLinearProgressStyle";
import { Extend } from "types";

type ColorsPlusGray =
  | "primary"
  | "warning"
  | "danger"
  | "success"
  | "info"
  | "rose"
  | "gray";

type CustomLinearProgressProps = {
  color: ColorsPlusGray;
};

export type ICustomLinerProgressProps = Extend<
  LinearProgressProps,
  CustomLinearProgressProps
>;
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
