import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";

import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import Search from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";

import Button from "ui.components/CustomButtons/Button";
import CustomDropdown from "ui.components/CustomDropdown/CustomDropdown";
import CustomInput from "ui.components/CustomInput/CustomInput";

import Header, { IHeaderProps } from "ui.components/Header/Header";

import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle";
import headerStyles from "assets/jss/material-kit-react/views/headerLinksStyle";

import profileImage from "assets/img/faces/avatar.jpg";

const useStyle = makeStyles(styles);

export default {
  title: "UI Kit React Material-UI/UI Components/Header",
  component: Header,
  parameters: {
    docs: {
      description: {
        component: "Header",
      },
    },
  },
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
export const HeaderSample1 = () => {
  const headerClasses = headerStyles();

  return (
    <Header
      brand="Menu"
      color="primary"
      leftLinks={
        <List className={headerClasses.list}>
          <ListItem className={headerClasses.listItem}>
            <Button
              href="#pablo"
              className={headerClasses.navLink}
              onClick={(e) => e.preventDefault()}
              color="transparent"
            >
              Link
            </Button>
          </ListItem>
          <ListItem className={headerClasses.listItem}>
            <Button
              href="#pablo"
              className={headerClasses.navLink}
              onClick={(e) => e.preventDefault()}
              color="transparent"
            >
              Link
            </Button>
          </ListItem>
          <ListItem className={headerClasses.listItem}>
            <CustomDropdown
              buttonText="Dropdown"
              dropdownHeader="Dropdown Header"
              buttonProps={{
                className: headerClasses.navLink,
                color: "transparent",
              }}
              dropdownList={[
                "Action",
                "Another action",
                "Something else here",
                { divider: true },
                "Separated link",
                { divider: true },
                "One more separated link",
              ]}
            />
          </ListItem>
        </List>
      }
    />
  );
};

export const HeaderSample2 = () => {
  const classes = useStyle();
  const headerClasses = headerStyles();

  return (
    <Header
      brand="Icons"
      color="info"
      rightLinks={
        <List className={headerClasses.list}>
          <ListItem className={headerClasses.listItem}>
            <Button color="transparent" className={headerClasses.navLink}>
              <Email className={headerClasses.icons} />
            </Button>
          </ListItem>
          <ListItem className={headerClasses.listItem}>
            <Button color="transparent" className={headerClasses.navLink}>
              <Face className={headerClasses.icons} />
            </Button>
          </ListItem>
          <ListItem className={headerClasses.listItem}>
            <CustomDropdown
              left
              hoverColor="info"
              dropdownHeader="Dropdown Header"
              buttonIcon="settings"
              buttonProps={{
                className: headerClasses.navLink,
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
          </ListItem>
        </List>
      }
    />
  );
};

export const HeaderSample3 = () => {
  const classes = headerStyles();
  const headClasses = useStyle();

  return (
    <Header
      brand="Brand"
      color="rose"
      leftLinks={
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={(e) => e.preventDefault()}
              color="transparent"
            >
              Link
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={(e) => e.preventDefault()}
              color="transparent"
            >
              Link
            </Button>
          </ListItem>
        </List>
      }
      rightLinks={
        <div>
          <CustomInput
            white
            inputRootCustomClasses={headClasses.inputRootCustomClasses}
            formControlProps={{
              className: headClasses.formControl,
            }}
            inputProps={{
              placeholder: "Search",
              inputProps: {
                "aria-label": "Search",
                className: headClasses.searchInput,
              },
            }}
          />
          <Button justIcon round color="white">
            <Search className={headClasses.searchIcon} />
          </Button>
        </div>
      }
    />
  );
};

export const HeaderSample4 = () => {
  const classes = headerStyles();

  return (
    <Header
      brand="Info Color"
      color="info"
      rightLinks={
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={`${classes.navLink} ${classes.navLinkActive}`}
              onClick={(e) => e.preventDefault()}
              color="transparent"
            >
              Discover
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={(e) => e.preventDefault()}
              color="transparent"
            >
              Profile
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={(e) => e.preventDefault()}
              color="transparent"
            >
              Settings
            </Button>
          </ListItem>
        </List>
      }
    />
  );
};

export const HeaderSample5 = () => {
  const classes = headerStyles();

  return (
    <Header
      brand="Primary Color"
      color="primary"
      rightLinks={
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={`${classes.navLink} ${classes.navLinkActive}`}
              onClick={(e) => e.preventDefault()}
              color="transparent"
            >
              <Explore className={classes.icons} /> Discover
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={(e) => e.preventDefault()}
              color="transparent"
            >
              <AccountCircle className={classes.icons} /> Profile
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={(e) => e.preventDefault()}
              color="transparent"
            >
              <Icon className={classes.icons}>settings</Icon> Settings
            </Button>
          </ListItem>
        </List>
      }
    />
  );
};

export const HeaderSample6 = () => {
  const classes = headerStyles();
  const headClasses = useStyle();

  return (
    <Header
      brand="Navbar with notifications"
      color="dark"
      rightLinks={
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={(e) => e.preventDefault()}
              color="transparent"
            >
              Discover
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={(e) => e.preventDefault()}
              color="transparent"
            >
              Wishlist
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              justIcon
              round
              href="#pablo"
              className={classes.notificationNavLink}
              onClick={(e) => e.preventDefault()}
              color="rose"
            >
              <Email className={classes.icons} />
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <CustomDropdown
              left
              caret={false}
              hoverColor="black"
              dropdownHeader="Dropdown Header"
              buttonText={
                <img
                  src={profileImage}
                  className={headClasses.img}
                  alt="profile"
                />
              }
              buttonProps={{
                className: `${classes.navLink} ${headClasses.imageDropdownButton}`,
                color: "transparent",
              }}
              dropdownList={["Me", "Settings and other stuff", "Sign out"]}
            />
          </ListItem>
        </List>
      }
    />
  );
};

export const HeaderSample7 = () => {
  const classes = headerStyles();
  const headClasses = useStyle();

  return (
    <Header
      brand="Navbar with profile"
      rightLinks={
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={(e) => e.preventDefault()}
              color="transparent"
            >
              Discover
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={(e) => e.preventDefault()}
              color="transparent"
            >
              Wishlist
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.registerNavLink}
              onClick={(e) => e.preventDefault()}
              color="rose"
              round
            >
              Register
            </Button>
          </ListItem>
        </List>
      }
    />
  );
};

export const HeaderSample8 = () => {
  const classes = headerStyles();
  const headClasses = useStyle();

  return (
    <Header
      brand="Transparent"
      color="transparent"
      rightLinks={
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <Button
              color="transparent"
              className={`${classes.navLink} ${headClasses.socialIconsButton}`}
            >
              <i
                className={`${classes.socialIcons} ${classes.marginRight5} fab fa-twitter`}
              />{" "}
              Twitter
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              color="transparent"
              className={`${classes.navLink} ${headClasses.socialIconsButton}`}
            >
              <i
                className={`${classes.socialIcons} ${classes.marginRight5} fab fa-facebook`}
              />{" "}
              Facebook
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              color="transparent"
              className={`${classes.navLink} ${headClasses.socialIconsButton}`}
            >
              <i
                className={`${classes.socialIcons} ${classes.marginRight5} fab fa-instagram`}
              />{" "}
              Instagram
            </Button>
          </ListItem>
        </List>
      }
    />
  );
};
