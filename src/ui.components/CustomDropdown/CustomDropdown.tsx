/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { ReactNode } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// for keys
import { v4 as uuid } from "uuid";

// @material-ui/core components
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Divider from "@material-ui/core/Divider";
import Icon from "@material-ui/core/Icon";
import Popper from "@material-ui/core/Popper";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

// core components
import Button, { IButtonProps } from "ui.components/CustomButtons/Button";

import customDropdownStyles from "assets/jss/material-kit-react/components/customDropdownStyle";

export type DropdownHoverColor =
  | "primary"
  | "info"
  | "success"
  | "warning"
  | "danger"
  | "rose"
  | "black";
type DropdownListItem = string | ReactNode | HTMLElement;

export interface ICustomDropdownProps {
  hoverColor?: DropdownHoverColor;
  buttonText?: ReactNode;
  buttonIcon?: React.ComponentType<SvgIconProps> | string;
  dropdownList: Array<DropdownListItem>;
  buttonProps?: IButtonProps;
  dropup?: boolean;
  dropdownHeader?: string;
  rtlActive?: boolean;
  caret?: boolean;
  left?: boolean;
  noLiPadding?: boolean;
  onClick?: (param: DropdownListItem) => void;
}

const CustomDropdown: React.FC<ICustomDropdownProps> = (
  props: ICustomDropdownProps
) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (anchorEl && anchorEl.contains(event.target as never)) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = (param: DropdownListItem) => {
    setAnchorEl(null);
    if (props && props.onClick) {
      props.onClick(param);
    }
  };

  const handleCloseAway = (event: React.MouseEvent<Document>) => {
    if (anchorEl && anchorEl.contains(event.target as never)) {
      return;
    }
    setAnchorEl(null);
  };

  const {
    buttonText,
    buttonIcon,
    dropdownList,
    buttonProps,
    dropup,
    dropdownHeader,
    caret,
    hoverColor = "br",
    left,
    rtlActive,
    noLiPadding,
  } = props;

  const classes = customDropdownStyles();

  const caretClasses = classNames({
    [classes.caret]: true,
    [classes.caretActive]: Boolean(anchorEl),
    [classes.caretRTL]: rtlActive,
  });
  const dropdownItem = classNames({
    [classes.dropdownItem]: true,
    // @ts-ignore
    [classes[`${hoverColor}Hover`]]: true,
    [classes.noLiPadding]: noLiPadding,
    [classes.dropdownItemRTL]: rtlActive,
  });
  let icon = null;
  switch (typeof buttonIcon) {
    case "object":
      // @ts-ignore
      icon = <props.buttonIcon className={classes.buttonIcon} />;
      break;
    case "string":
      icon = <Icon className={classes.buttonIcon}>{props.buttonIcon}</Icon>;
      break;
    default:
      icon = null;
      break;
  }
  return (
    <div>
      <div>
        <Button
          aria-label="Notifications"
          aria-owns={anchorEl ? "menu-list" : undefined}
          aria-haspopup="true"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...buttonProps}
          onClick={handleClick}
        >
          {icon}
          {buttonText !== undefined ? buttonText : null}
          {caret ? <b className={caretClasses} /> : null}
        </Button>
      </div>
      <Popper
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        transition
        disablePortal
        placement={
          // eslint-disable-next-line no-nested-ternary
          dropup
            ? left
              ? "top-start"
              : "top"
            : left
            ? "bottom-start"
            : "bottom"
        }
        className={classNames({
          [classes.popperClose]: !anchorEl,
          [classes.popperResponsive]: true,
        })}
      >
        {() => (
          <Grow
            in={Boolean(anchorEl)}
            // @ts-ignore
            id="menu-list"
            style={
              dropup
                ? { transformOrigin: "0 100% 0" }
                : { transformOrigin: "0 0 0" }
            }
          >
            <Paper className={classes.dropdown}>
              <ClickAwayListener onClickAway={handleCloseAway}>
                <MenuList role="menu" className={classes.menuList}>
                  {dropdownHeader !== undefined ? (
                    <MenuItem
                      onClick={() => handleClose(dropdownHeader)}
                      className={classes.dropdownHeader}
                    >
                      {dropdownHeader}
                    </MenuItem>
                  ) : null}
                  {dropdownList.map((prop) => {
                    if (prop && prop === "divider") {
                      return (
                        <Divider
                          key={uuid()}
                          onClick={() => handleClose("divider")}
                          className={classes.dropdownDividerItem}
                        />
                      );
                    }
                    return (
                      <MenuItem
                        key={uuid()}
                        onClick={() => handleClose(prop)}
                        className={dropdownItem}
                      >
                        {prop}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default CustomDropdown;
