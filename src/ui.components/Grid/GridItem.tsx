import React, { ReactNode } from "react";
// @material-ui/core components
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

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

export interface IGridItemProps {
  children: ReactNode;
  className: string;
}
const useStyles = makeStyles(styles);

const GridItem: React.FC<IGridItemProps> = (props: IGridItemProps) => {
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
