import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import GridContainer from "ui.components/Grid/GridContainer";
import GridItem from "ui.components/Grid/GridItem";

const useStyles = makeStyles({
  paper: {
    padding: "4px",
    textAlign: "center",
    backgroud: "#6c757d",
  },
});

export default {
  title: "UI Kit React Material-UI/UI Components/GridSystem",
  component: GridContainer,
  parameters: {
    docs: {
      description: {
        component: "GridContainer, GridItem",
      },
    },
  },
} as Meta;

export const GridSystem = () => {
  const classes = useStyles();

  return (
    <GridContainer>
      <GridItem xs={12}>
        <Paper className={classes.paper}>xs=12</Paper>
      </GridItem>
      <GridItem xs={6}>
        <Paper className={classes.paper}>xs=6</Paper>
      </GridItem>
      <GridItem xs={6}>
        <Paper className={classes.paper}>xs=6</Paper>
      </GridItem>
      <GridItem xs={3}>
        <Paper className={classes.paper}>xs=3</Paper>
      </GridItem>
      <GridItem xs={3}>
        <Paper className={classes.paper}>xs=3</Paper>
      </GridItem>
      <GridItem xs={3}>
        <Paper className={classes.paper}>xs=3</Paper>
      </GridItem>
      <GridItem xs={3}>
        <Paper className={classes.paper}>xs=3</Paper>
      </GridItem>
    </GridContainer>
  );
};
