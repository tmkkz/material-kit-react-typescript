import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { v4 as uuid } from "uuid";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { Colors } from "types";
import styles from "assets/jss/material-kit-react/components/paginationStyle";

type PageText = "Prev" | "Next" | "...";

type PagenationText = number | PageText;

type PagenationPage = {
  active?: boolean;
  disabled?: boolean;
  text: PagenationText;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onClick?: () => void;
};

export interface IPagenationProps {
  pages: Array<PagenationPage>;
  color: Colors;
}

const useStyles = makeStyles(styles);

const Pagination: React.FC<IPagenationProps> = (props: IPagenationProps) => {
  const classes = useStyles();
  const { pages, color = "primary" } = props;

  return (
    <ul className={classes.pagination}>
      {pages.map((prop) => {
        const paginationLink = classNames({
          [classes.paginationLink]: true,
          [classes[color]]: prop.active,
          [classes.disabled]: prop.disabled,
        });

        return (
          <li className={classes.paginationItem} key={uuid()}>
            {prop.onClick !== undefined ? (
              <Button onClick={prop.onClick} className={paginationLink}>
                {prop.text}
              </Button>
            ) : (
              <Button
                // eslint-disable-next-line no-alert
                onClick={() => alert(`you've clicked ${prop.text}`)}
                className={paginationLink}
              >
                {prop.text}
              </Button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
