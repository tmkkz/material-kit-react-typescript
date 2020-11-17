/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement, ReactNode } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import SwipeableViews from "react-swipeable-views";

// @material-ui/core components
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

import { Colors, TabGridSize } from "types";
// core components
import GridContainer from "ui.components/Grid/GridContainer";
import GridItem from "ui.components/Grid/GridItem";

import useStyles from "assets/jss/material-kit-react/components/navPillsStyle";

type NavPillsTabProps = {
  tabId: number;
  tabButton?: string;
  tabIcon?: React.ComponentType<SvgIconProps> | string;
  tabContent?: ReactNode;
};

type HorizontalShape = {
  tabsGrid: TabGridSize;
  contentGrid: TabGridSize;
};

export interface INavPillsProps {
  active?: number;
  tabs: Array<NavPillsTabProps>;
  color?: Colors;
  direction?: string;
  horizontal?: HorizontalShape;
  alignCenter?: boolean;
}

type IconElement = {
  icon: ReactElement | undefined;
};

const NavPills: React.FC<INavPillsProps> = (props: INavPillsProps) => {
  const {
    active = 0,
    tabs,
    color = "primary",
    direction,
    horizontal,
    alignCenter,
  } = props;

  const [activeTab, setActiveTab] = React.useState(active);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: any, value: React.SetStateAction<number>) => {
    setActiveTab(value);
  };

  const handleChangeIndex = (index: number) => {
    setActiveTab(index);
  };

  const classes = useStyles();

  const flexContainerClasses = classNames({
    [classes.flexContainer]: true,
    [classes.horizontalDisplay]: horizontal !== undefined,
  });

  const tabButtons = (
    <Tabs
      classes={{
        root: classes.root,
        fixed: classes.fixed,
        flexContainer: flexContainerClasses,
        indicator: classes.displayNone,
      }}
      value={activeTab}
      onChange={handleChange}
      centered={alignCenter}
    >
      {tabs.map((prop) => {
        const icon: IconElement = { icon: undefined };
        if (prop.tabIcon !== undefined) {
          icon.icon = <prop.tabIcon className={classes.tabIcon} />;
        }

        const pillsClasses = classNames({
          [classes.pills]: true,
          [classes.horizontalPills]: horizontal !== undefined,
          [classes.pillsWithIcons]: prop.tabIcon !== undefined,
        });

        return (
          <Tab
            label={prop.tabButton}
            key={prop.tabId}
            {...icon}
            classes={{
              root: pillsClasses,
              selected: classes[color],
              wrapper: classes.tabWrapper,
            }}
          />
        );
      })}
    </Tabs>
  );

  const tabContent = (
    <div className={classes.contentWrapper}>
      <SwipeableViews
        axis={direction === "rtl" ? "x-reverse" : "x"}
        index={activeTab}
        onChangeIndex={handleChangeIndex}
      >
        {tabs.map((prop) => {
          return (
            <div className={classes.tabContent} key={prop.tabId}>
              {prop.tabContent}
            </div>
          );
        })}
      </SwipeableViews>
    </div>
  );

  return horizontal !== undefined ? (
    <GridContainer>
      <GridItem {...horizontal.tabsGrid}>{tabButtons}</GridItem>
      <GridItem {...horizontal.contentGrid}>{tabContent}</GridItem>
    </GridContainer>
  ) : (
    <div>
      {tabButtons}
      {tabContent}
    </div>
  );
};

export default NavPills;
