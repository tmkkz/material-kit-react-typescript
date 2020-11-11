import React, { ReactNode } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = {
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto",
  },
};

export interface IGridContainerProps {
  children: ReactNode;
  className: string;
}

const useStyles = makeStyles(styles);

const GridContainer: React.FC<IGridContainerProps> = (
  props: IGridContainerProps
) => {
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
