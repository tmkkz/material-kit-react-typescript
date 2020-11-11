/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { SvgIconProps } from "@material-ui/core/SvgIcon"
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle";

type Link = {
  anchorText: string;
  href: string;
}

export interface IFooterProps {
  whiteFont?: boolean;
  links?: Array<Link>;
  copyRightUrl: string;
  copyRightAnchorText: string;
  copy?: string;
  icon: React.ComponentType<SvgIconProps>;
}

const useStyles = makeStyles(styles);

const Footer: React.FC<IFooterProps> = (props: IFooterProps) => {
  const classes = useStyles();
  const { whiteFont, links, copyRightUrl, copyRightAnchorText, copy} = props;

  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });

  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });

  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            {links && links.map((link) => {
              <ListItem className={classes.inlineBlock}>
                <a
                  href={link.href}
                  className={classes.block}
                  target="_blank"
                >
                  {link.anchorText}
                </a>
              </ListItem>
            })}
          </List>
        </div>
        <div className={classes.right}>
          &copy; {new Date().getFullYear()} , made with{" "}
          <props.icon className={classes.icon} /> by{" "}
          <a
            href={copyRightUrl}
            className={aClasses}
            target="_blank"
          >
            {copyRightAnchorText}
          </a>{" "}
          {copy}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
