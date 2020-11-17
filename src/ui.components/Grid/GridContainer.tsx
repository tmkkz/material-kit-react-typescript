import React, { ReactNode } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid, { GridProps } from "@material-ui/core/Grid";
import { Extend, TabGridSize } from "types";

const styles = {
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto",
  },
};

type GridContainerProps = {
  children: ReactNode;
  className?: string;
  tabGridSize?: TabGridSize;
};

export type CustomGridProps = Extend<GridProps, GridContainerProps>;

const useStyles = makeStyles(styles);

const GridContainer: React.FC<CustomGridProps> = (props: CustomGridProps) => {
  const classes = useStyles();
  const { children, className = "", ...rest } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Grid container {...rest} className={`${classes.grid} ${className}`}>
      {children}
    </Grid>
  );
};

export default GridContainer;
