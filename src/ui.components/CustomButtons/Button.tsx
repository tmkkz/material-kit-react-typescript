/* eslint-disable react/prop-types */
import React, { forwardRef, ReactNode } from "react";
import { makeStyles } from "@material-ui/core/styles";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import Button, { ButtonProps } from "@material-ui/core/Button";

// core components
import { Colors, Size, Extend } from "types";
import styles from "assets/jss/material-kit-react/components/buttonStyle";

export type ButtonColor =
  | Colors
  | "white"
  | "facebook"
  | "twitter"
  | "google"
  | "github"
  | "transparent";

const useStyles = makeStyles(styles);

interface IButtonProps {
  color?: ButtonColor;
  size?: Size;
  simple?: boolean;
  round?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  block?: boolean;
  link?: boolean;
  justIcon?: boolean;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export type CustomButtonProps = Extend<ButtonProps, IButtonProps>;

type Ref = HTMLButtonElement;

const RegularButton: React.FC<CustomButtonProps> = forwardRef<
  Ref,
  CustomButtonProps
>((props, ref) => {
  const {
    color = "default" as ButtonColor,
    size,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    block,
    link,
    justIcon,
    className = "",
    href,
    target,
    rel,
    ...rest
  } = props;

  const classes = useStyles();

  let buttonSize = false;
  let sizeButton = "lg" as Size;
  if (size === "sm") {
    buttonSize = true;
    sizeButton = "sm";
  }

  const relValue = target === "_blank" ? "noopener noreferrer" : rel;
  const linkValues = href ? { href, target, rel: relValue } : undefined;

  const btnClasses = classNames({
    [classes.button]: true,
    [classes[sizeButton]]: buttonSize,
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
    <Button {...linkValues} {...rest} ref={ref} className={btnClasses}>
      {children}
    </Button>
  );
});

export default RegularButton;
