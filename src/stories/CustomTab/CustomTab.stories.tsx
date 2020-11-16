import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";

import CustomTabs, {
  ICustomTabsProps,
} from "ui.components/CustomTabs/CustomTabs";

const useStyles = makeStyles({
  section: {
    background: "#EEEEEE",
    padding: "70px 0",
  },
  container: {
    textAlign: "center",
  },
  textCenter: {
    textAlign: "center",
  },
});

export default {
  title: "UI Kit React Material-UI/UI Components/CutomTabs",
  component: CustomTabs,
  parameters: {
    docs: {
      description: {
        component:
          "CustomTabs made some Tab component in Tabs container, contents shows in card component.",
      },
    },
  },
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<ICustomTabsProps> = (args) => <CustomTabs {...args} />;

export const SampleCutomTab1 = () => {
  const classes = useStyles();
  return (
    <CustomTabs
      headerColor="primary"
      tabs={[
        {
          tabIndex: 0,
          tabName: "Profile",
          tabIcon: Face,
          tabContent: (
            <p className={classes.textCenter}>
              I think that’s a responsibility that I have, to push
              possibilities, to show people, this is the level that things could
              be at. So when you get something that has the name Kanye West on
              it, it’s supposed to be pushing the furthest possibilities. I will
              be the leader of a company that ends up being worth billions of
              dollars, because I got the answers. I understand culture. I am the
              nucleus.
            </p>
          ),
        },
        {
          tabIndex: 1,
          tabName: "Messages",
          tabIcon: Chat,
          tabContent: (
            <p className={classes.textCenter}>
              I think that’s a responsibility that I have, to push
              possibilities, to show people, this is the level that things could
              be at. I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers. I understand
              culture. I am the nucleus. I think that’s a responsibility that I
              have, to push possibilities, to show people, this is the level
              that things could be at.
            </p>
          ),
        },
        {
          tabIndex: 2,
          tabName: "Settings",
          tabIcon: Build,
          tabContent: (
            <p className={classes.textCenter}>
              think that’s a responsibility that I have, to push possibilities,
              to show people, this is the level that things could be at. So when
              you get something that has the name Kanye West on it, it’s
              supposed to be pushing the furthest possibilities. I will be the
              leader of a company that ends up being worth billions of dollars,
              because I got the answers. I understand culture. I am the nucleus.
            </p>
          ),
        },
      ]}
    />
  );
};

SampleCutomTab1.parameters = {
  docs: {
    description: {
      story: "Sample",
    },
  },
};

export const SampleCutomTab2 = () => {
  const classes = useStyles();

  return (
    <CustomTabs
      plainTabs
      headerColor="danger"
      tabs={[
        {
          tabIndex: 0,
          tabName: "Home",
          tabContent: (
            <p className={classes.textCenter}>
              I think that’s a responsibility that I have, to push
              possibilities, to show people, this is the level that things could
              be at. So when you get something that has the name Kanye West on
              it, it’s supposed to be pushing the furthest possibilities. I will
              be the leader of a company that ends up being worth billions of
              dollars, because I got the answers. I understand culture. I am the
              nucleus.
            </p>
          ),
        },
        {
          tabIndex: 1,
          tabName: "Updates",
          tabContent: (
            <p className={classes.textCenter}>
              I think that’s a responsibility that I have, to push
              possibilities, to show people, this is the level that things could
              be at. I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers. I understand
              culture. I am the nucleus. I think that’s a responsibility that I
              have, to push possibilities, to show people, this is the level
              that things could be at.
            </p>
          ),
        },
        {
          tabIndex: 2,
          tabName: "History",
          tabContent: (
            <p className={classes.textCenter}>
              think that’s a responsibility that I have, to push possibilities,
              to show people, this is the level that things could be at. So when
              you get something that has the name Kanye West on it, it’s
              supposed to be pushing the furthest possibilities. I will be the
              leader of a company that ends up being worth billions of dollars,
              because I got the answers. I understand culture. I am the nucleus.
            </p>
          ),
        },
      ]}
    />
  );
};
