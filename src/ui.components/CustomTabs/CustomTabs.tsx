import React, { ReactNode } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Icon from "@material-ui/core/Icon";
// core components
import Card from "ui.components/Card/Card";
import CardBody from "ui.components/Card/CardBody";
import CardHeader from "ui.components/Card/CardHeader";

import { Colors } from "types";
import styles from "assets/jss/material-kit-react/components/customTabsStyle";

type CustomTabProps = {
  tabIndex: number;
  tabName: string;
  tabIcon?: React.ComponentType<SvgIconProps>;
  tabContent: ReactNode;
};

export interface ICustomTabsProps {
  headerColor?: Colors;
  title?: string;
  tabs: Array<CustomTabProps>;
  rtlActive?: boolean;
  plainTabs?: boolean;
}
const useStyles = makeStyles(styles);

const CustomTabs: React.FC<ICustomTabsProps> = (props: ICustomTabsProps) => {
  const [value, setValue] = React.useState(0);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line no-shadow
  const handleChange = (event, value) => {
    setValue(value);
  };
  const classes = useStyles();
  const { headerColor, plainTabs, tabs, title, rtlActive } = props;

  let rtlActiveProps = false;
  if (rtlActive) {
    rtlActiveProps = true;
  }
  const cardTitle = classNames({
    [classes.cardTitle]: true,
    [classes.cardTitleRTL]: rtlActiveProps,
  });

  return (
    <Card plain={plainTabs}>
      <CardHeader color={headerColor} plain={plainTabs}>
        {title !== undefined ? <div className={cardTitle}>{title}</div> : null}
        <Tabs
          value={value}
          onChange={handleChange}
          classes={{
            root: classes.tabsRoot,
            indicator: classes.displayNone,
          }}
        >
          {tabs.map((prop) => {
            let icon = {};
            if (prop.tabIcon) {
              icon = {
                icon:
                  typeof prop.tabIcon === "string" ? (
                    <Icon>{prop.tabIcon}</Icon>
                  ) : (
                    <prop.tabIcon />
                  ),
              };
            }
            return (
              <Tab
                classes={{
                  root: classes.tabRootButton,
                  selected: classes.tabSelected,
                  wrapper: classes.tabWrapper,
                }}
                key={prop.tabIndex}
                label={prop.tabName}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...icon}
              />
            );
          })}
        </Tabs>
      </CardHeader>
      <CardBody>
        {tabs.map((prop) => {
          if (prop.tabIndex === value) {
            return <div key={prop.tabIndex}>{prop.tabContent}</div>;
          }
          return null;
        })}
      </CardBody>
    </Card>
  );
};

export default CustomTabs;
