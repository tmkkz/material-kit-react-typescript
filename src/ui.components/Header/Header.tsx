/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { ReactNode } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import styles from "assets/jss/material-kit-react/components/headerStyle";

type HeaderColors =
  | "primary"
  | "warning"
  | "danger"
  | "success"
  | "info"
  | "rose"
  | "transparent"
  | "white"
  | "dark";

type ChangeColorOnScroll = {
  height: number;
  color: HeaderColors;
};

export interface IHeaderProps {
  color?: HeaderColors;
  rightLinks?: ReactNode;
  leftLinks?: ReactNode;
  brand?: string;
  fixed?: boolean;
  absolute?: boolean;
  changeColorOnScroll?: ChangeColorOnScroll;
}

const useStyles = makeStyles(styles);

const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const headerColorChange = () => {
    const { color = "white", changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;

    let changeColorOnScrollHeight = 0;
    let changeColorOnScrollColor = "white";

    if (changeColorOnScroll) {
      changeColorOnScrollHeight = changeColorOnScroll.height;
      changeColorOnScrollColor = changeColorOnScroll.color;
    }

    if (windowsScrollTop > changeColorOnScrollHeight) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        // @ts-ignore
        .classList.add(classes[changeColorOnScrollColor]);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        // @ts-ignore
        .classList.remove(classes[changeColorOnScrollColor]);
    }
  };

  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const {
    color = "white",
    rightLinks,
    leftLinks,
    brand,
    fixed,
    absolute,
  } = props;

  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
  });

  const brandComponent = <Button className={classes.title}>{brand}</Button>;

  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        {leftLinks !== undefined ? brandComponent : null}
        <div className={classes.flex}>
          {leftLinks !== undefined ? (
            <Hidden smDown implementation="css">
              {leftLinks}
            </Hidden>
          ) : (
            brandComponent
          )}
        </div>
        <Hidden smDown implementation="css">
          {rightLinks}
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>
            {leftLinks}
            {rightLinks}
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
};

export default Header;
