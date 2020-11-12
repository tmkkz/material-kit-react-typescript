import React, { ReactElement } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import styles from "assets/jss/material-kit-react/components/parallaxStyle";

export interface IParallaxProps {
  className?: string;
  filter?: boolean;
  children?: ReactElement;
  style?: Record<string, string>;
  image?: string;
  small?: boolean;
}

const useStyles = makeStyles(styles);

const Parallax: React.FC<IParallaxProps> = (props: IParallaxProps) => {
  let windowScrollTop;
  if (window.innerWidth >= 768) {
    windowScrollTop = window.pageYOffset / 3;
  } else {
    windowScrollTop = 0;
  }
  const [transform, setTransform] = React.useState(
    `translate3d(0,${windowScrollTop}px,0)`
  );

  const resetTransform = () => {
    const windowScrollTopReset = window.pageYOffset / 3;
    setTransform(`translate3d(0,${windowScrollTopReset}px,0)`);
  };

  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform);
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  });

  const { filter, className = "", children, style, image, small } = props;

  let classNameExists = false;
  if (className.length > 0) {
    classNameExists = true;
  }
  const classes = useStyles();
  const parallaxClasses = classNames({
    [classes.parallax]: true,
    [classes.filter]: filter,
    [classes.small]: small,
    [className]: classNameExists,
  });
  return (
    <div
      className={parallaxClasses}
      style={{
        ...style,
        backgroundImage: `url(${image})`,
        transform,
      }}
    >
      {children}
    </div>
  );
};

export default Parallax;
