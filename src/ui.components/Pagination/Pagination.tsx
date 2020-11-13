/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { v4 as uuid } from "uuid";

// @material-ui/core components
import { usePagination, UsePaginationProps } from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import Button from "@material-ui/core/Button";

import { Colors, Extend } from "types";
import styles from "assets/jss/material-kit-react/components/paginationStyle";

type customPaginationProps = {
  color: Colors;
  firstText?: string | React.ComponentType<SvgIconProps>;
  previousText?: string | React.ComponentType<SvgIconProps>;
  nextText?: string | React.ComponentType<SvgIconProps>;
  lastText?: string | React.ComponentType<SvgIconProps>;
};

export type IPaginationProps = Extend<
  UsePaginationProps,
  customPaginationProps
>;

const useStyles = makeStyles(styles);

const Pagination: React.FC<IPaginationProps> = (props: IPaginationProps) => {
  const classes = useStyles();
  const {
    color = "primary",
    firstText,
    previousText,
    nextText,
    lastText,
  } = props;

  const { items } = usePagination({ ...props });

  return (
    <ul className={classes.pagination}>
      {items.map(({ page, type, selected, disabled, ...item }) => {
        const paginationLink = classNames({
          [classes.paginationLink]: true,
          [classes[color]]: selected,
          [classes.disabled]: disabled,
        });

        let children = null;

        if (type === "start-ellipsis" || type === "end-ellipsis") {
          children = "...";
        } else if (type === "page") {
          children = (
            <Button className={paginationLink} {...item}>
              {page}
            </Button>
          );
        } else {
          let pageType = null;
          let icon = null;
          switch (type) {
            case "first":
              if (typeof firstText === "object") {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                icon = <props.firstText />;
              } else {
                pageType = firstText || "|<";
              }
              break;
            case "previous":
              if (typeof previousText === "object") {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                icon = <props.previousText />;
              } else {
                pageType = previousText || "<";
              }
              break;
            case "next":
              if (typeof nextText === "object") {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                icon = <props.nextText />;
              } else {
                pageType = nextText || ">";
              }
              break;
            case "last":
              if (typeof lastText === "object") {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                icon = <props.lastText />;
              } else {
                pageType = firstText || ">|";
              }
              break;
            default:
          }

          children = (
            <Button className={paginationLink} {...item}>
              {icon}
              {pageType}
            </Button>
          );
        }

        return (
          <li className={classes.paginationItem} key={uuid()}>
            {children}
          </li>
        );
      })}
    </ul>
  );
};
export default Pagination;
