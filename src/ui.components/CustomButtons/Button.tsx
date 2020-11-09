/* eslint-disable react/prop-types */
import React, { forwardRef, ReactNode } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import Button from "@material-ui/core/Button";

// core components
import { Colors, Size } from "types";
import buttonStyle from "assets/jss/material-kit-react/components/buttonStyle.js";

type ButtonColor =
  | Colors
  | "white"
  | "facebook"
  | "twitter"
  | "google"
  | "github"
  | "transparent";

export interface IButtonProps {
  color: ButtonColor;
  size: Size;
  simple: boolean;
  round: boolean;
  fullWidth: boolean;
  disabled: boolean;
  block: boolean;
  link: boolean;
  justIcon: boolean;
  children: ReactNode;
  className: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

type Ref = HTMLButtonElement;

const RegularButton: React.FC<IButtonProps> = forwardRef<Ref, IButtonProps>(
  (props, ref) => {
    const {
      color,
      round,
      children,
      fullWidth,
      disabled,
      simple,
      size,
      block,
      link,
      justIcon,
      className,
      ...rest
    } = props;

    const classes = buttonStyle();

    const btnClasses = classNames({
      [classes.button]: true,
      [classes[size]]: size,
      [classes[color]]: color,
      [classes.round]: round,
      [classes.fullWidth]: fullWidth,
      [classes.disabled]: disabled,
      [classes.simple]: simple,
      [classes.block]: block,
      [classes.link]: link,
      [classes.justIcon]: justIcon,
      [className]: className,
    });
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Button {...rest} ref={ref} className={btnClasses}>
        {children}
      </Button>
    );
  }
);

export default RegularButton;
