import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import styles from "assets/jss/material-kit-react/components/infoStyle";
import { Colors } from "types";

export interface IInfoAreaProps {
  icon: React.ComponentType<SvgIconProps>;
  title: string;
  description: string;
  iconColor?: Colors & "gray";
  vertical: boolean;
}

const useStyles = makeStyles(styles);

const InfoArea: React.FC<IInfoAreaProps> = (props: IInfoAreaProps) => {
  const classes = useStyles();
  const { title, description, iconColor = "gray", vertical } = props;

  const iconWrapper = classNames({
    [classes.iconWrapper]: true,
    [classes[iconColor]]: true,
    [classes.iconWrapperVertical]: vertical,
  });

  const iconClasses = classNames({
    [classes.icon]: true,
    [classes.iconVertical]: vertical,
  });

  return (
    <div className={classes.infoArea}>
      <div className={iconWrapper}>
        <props.icon className={iconClasses} />
      </div>
      <div className={classes.descriptionWrapper}>
        <h4 className={classes.title}>{title}</h4>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
};

export default InfoArea;
