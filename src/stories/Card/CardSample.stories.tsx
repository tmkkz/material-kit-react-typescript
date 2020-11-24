import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Card from "ui.components/Card/Card";
import CardBody from "ui.components/Card/CardBody";
import CardFooter from "ui.components/Card/CardFooter";
import CardHeader from "ui.components/Card/CardHeader";

import GridContainer from "ui.components/Grid/GridContainer";
import GridItem from "ui.components/Grid/GridItem";
import Button from "ui.components/CustomButtons/Button";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle";
import imageStyle from "assets/jss/material-kit-react/imagesStyles";

const useStyle = makeStyles(styles);
const useImageStyle = makeStyles(imageStyle);

export default {
  title: "UI Kit React Material-UI/UI Components/Card",
  component: Card,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
} as Meta;

export const CardSample1 = () => {
  const classes = useStyle();
  const imgClasses = useImageStyle();
  const imageClasses = classNames(
    imgClasses.imgRaised,
    imgClasses.imgRoundedCircle,
    imgClasses.imgFluid
  );

  return (
    <GridContainer>
      <GridItem xs={6} sm={6} md={2}>
        <Card plain>
          <GridItem xs={4} sm={4} md={2} className={classes.itemGrid}>
            <img src={team1} alt="..." className={imageClasses} />
          </GridItem>
          <h4 className={classes.cardTitle}>
            Gigi Hadid
            <br />
            <small className={classes.smallTitle}>Model</small>
          </h4>
          <CardBody>
            <p className={classes.description}>
              You can write here details about one of your team members. You can
              give more details about what they do. Feel free to add some{" "}
              <a href="#pablo">links</a> for people to be able to follow them
              outside the site.
            </p>
          </CardBody>
          <CardFooter className={classes.justifyCenter}>
            <Button justIcon color="transparent" className={classes.margin5}>
              <i className={`${classes.socials} fab fa-twitter`} />
            </Button>
            <Button justIcon color="transparent" className={classes.margin5}>
              <i className={`${classes.socials} fab fa-instagram`} />
            </Button>
            <Button justIcon color="transparent" className={classes.margin5}>
              <i className={`${classes.socials} fab fa-facebook`} />
            </Button>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={6} sm={6} md={2}>
        <Card plain>
          <GridItem xs={4} sm={4} md={2} className={classes.itemGrid}>
            <img src={team2} alt="..." className={imageClasses} />
          </GridItem>
          <h4 className={classes.cardTitle}>
            Christian Louboutin
            <br />
            <small className={classes.smallTitle}>Designer</small>
          </h4>
          <CardBody>
            <p className={classes.description}>
              You can write here details about one of your team members. You can
              give more details about what they do. Feel free to add some{" "}
              <a href="#pablo">links</a> for people to be able to follow them
              outside the site.
            </p>
          </CardBody>
          <CardFooter className={classes.justifyCenter}>
            <Button justIcon color="transparent" className={classes.margin5}>
              <i className={`${classes.socials} fab fa-twitter`} />
            </Button>
            <Button justIcon color="transparent" className={classes.margin5}>
              <i className={`${classes.socials} fab fa-linkedin`} />
            </Button>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={6} sm={6} md={2}>
        <Card plain>
          <GridItem xs={4} sm={4} md={2} className={classes.itemGrid}>
            <img src={team3} alt="..." className={imageClasses} />
          </GridItem>
          <h4 className={classes.cardTitle}>
            Kendall Jenner
            <br />
            <small className={classes.smallTitle}>Model</small>
          </h4>
          <CardBody>
            <p className={classes.description}>
              You can write here details about one of your team members. You can
              give more details about what they do. Feel free to add some{" "}
              <a href="#pablo">links</a> for people to be able to follow them
              outside the site.
            </p>
          </CardBody>
          <CardFooter className={classes.justifyCenter}>
            <Button justIcon color="transparent" className={classes.margin5}>
              <i className={`${classes.socials} fab fa-twitter`} />
            </Button>
            <Button justIcon color="transparent" className={classes.margin5}>
              <i className={`${classes.socials} fab fa-instagram`} />
            </Button>
            <Button justIcon color="transparent" className={classes.margin5}>
              <i className={`${classes.socials} fab fa-facebook`} />
            </Button>
          </CardFooter>
        </Card>
      </GridItem>
    </GridContainer>
  );
};
