import React, { ReactNode } from "react";

// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";

import CustomDropdown from "ui.components/CustomDropdown/CustomDropdown";

// @material-ui/icons
import { Apps } from "@material-ui/icons";

import profileImage from "assets/img/faces/avatar.jpg";

const useStyle = makeStyles((theme) =>
  createStyles({
    navLink: {
      color: "inherit",
      position: "relative",
      padding: "0.9375rem",
      fontWeight: 400,
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "3px",
      lineHeight: "20px",
      textDecoration: "none",
      margin: "0px",
      display: "inline-flex",
      "&:hover,&:focus": {
        color: "inherit",
        background: "rgba(200, 200, 200, 0.2)",
      },
      [theme.breakpoints.down("sm")]: {
        width: "calc(100% - 30px)",
        marginLeft: "15px",
        marginBottom: "8px",
        marginTop: "8px",
        textAlign: "left",
        "& > span:first-child": {
          justifyContent: "flex-start",
        },
      },
    },
    dropdownLink: {
      "&,&:hover,&:focus": {
        color: "inherit",
        textDecoration: "none",
        display: "block",
        padding: "10px 20px",
      },
    },
    img: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
    },
    imageDropdownButton: {
      padding: "0px",
      top: "4px",
      borderRadius: "50%",
      marginLeft: "5px",
    },
  })
);

export default {
  title: "UI Kit React Material-UI/UI Components/CustomDropdown",
  component: CustomDropdown,
  parameters: {
    docs: {
      description: {
        component: "CustomDropdown List",
      },
    },
  },
} as Meta;

export const DropdownLinks = (): ReactNode => {
  const classes = useStyle();

  return (
    <CustomDropdown
      noLiPadding
      buttonText="Components"
      buttonProps={{
        className: classes.navLink,
        color: "transparent",
      }}
      buttonIcon={Apps}
      dropdownList={[
        <Link href="https://creative-tim.com" className={classes.dropdownLink}>
          All components
        </Link>,
        <a
          href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
          target="_blank"
          rel="noopen noreferrer"
          className={classes.dropdownLink}
        >
          Documentation
        </a>,
      ]}
    />
  );
};

DropdownLinks.parameters = {
  docs: {
    description: {
      story: "Dropdown List contains Link object, HTML Element(a tag)",
    },
  },
};

export const TextDropdown = (): ReactNode => {
  const classes = useStyle();

  return (
    <CustomDropdown
      buttonText="Dropdown"
      dropdownHeader="Dropdown Header"
      buttonProps={{
        className: classes.navLink,
        color: "transparent",
      }}
      dropdownList={[
        "Action",
        "Another action",
        "Something else here",
        "divider",
        "Separated link",
        "divider",
        "One more separated link",
      ]}
    />
  );
};

TextDropdown.parameters = {
  docs: {
    description: {
      story: 'Dropdown List contains text and divider(use "divider")',
    },
  },
};

export const ButtonDropdown = (): ReactNode => {
  const classes = useStyle();

  return (
    <CustomDropdown
      left
      caret={false}
      hoverColor="black"
      dropdownHeader="Dropdown Header"
      buttonText={
        <img src={profileImage} className={classes.img} alt="profile" />
      }
      buttonProps={{
        className: `${classes.navLink} ${classes.imageDropdownButton}`,
        color: "transparent",
      }}
      dropdownList={["Me", "Settings and other stuff", "Sign out"]}
    />
  );
};

ButtonDropdown.parameters = {
  docs: {
    description: {
      story: "image use for dropdown button",
    },
  },
};
