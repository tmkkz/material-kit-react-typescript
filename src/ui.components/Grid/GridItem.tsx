import React from "react";
// @material-ui/core components
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { CustomGridProps } from "ui.components/Grid/GridContainer";

const styles = createStyles({
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    flexBasis: "auto",
  },
});

const useStyles = makeStyles(styles);

const GridItem: React.FC<CustomGridProps> = (props: CustomGridProps) => {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Grid item {...rest} className={`${classes.grid} ${className}`}>
      {children}
    </Grid>
  );
};

export default GridItem;
