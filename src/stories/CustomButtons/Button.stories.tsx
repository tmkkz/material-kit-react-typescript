import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { makeStyles } from "@material-ui/core/styles";
import Favorite from "@material-ui/icons/Favorite";

import Button, {
  IButtonProps,
  ButtonColor,
} from "ui.components/CustomButtons/Button";

import { Size } from "types";
import { Block } from "@material-ui/icons";

const useStyles = makeStyles({
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF",
  },
});

export default {
  title: "UI Kit React Material-UI/UI Components/Buttons",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "Buttons",
      },
    },
  },
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});

PrimaryButton.args = {
  color: "primary" as ButtonColor,
  size: "lg" as Size,
  simple: false,
  round: false,
  fullWidth: false,
  disabled: false,
  block: false,
  link: false,
  justIcon: false,
  children: "Button",
  className: undefined,
};

export const AllColorsButtons = () => (
  <div>
    <Button>Default</Button>
    <Button color="primary">Primary</Button>
    <Button color="warning">Warning</Button>
    <Button color="danger">Danger</Button>
    <Button color="success">Success</Button>
    <Button color="info">Info</Button>
    <Button color="rose">Rose</Button>
    <Button color="white">White</Button>
    <Button color="facebook">Facebook</Button>
    <Button color="twitter">Twitter</Button>
    <Button color="google">Google</Button>
    <Button color="github">Github</Button>
    <Button color="transparent">Transparent</Button>
  </div>
);

AllColorsButtons.storyName = "Button Color";

export const AllSizeButtons = () => (
  <div>
    <Button size="sm">Small button</Button>
    <Button>Regular button</Button>
    <Button size="lg">Large button</Button>
  </div>
);

AllSizeButtons.storyName = "Button Size";

export const RoundButton = Template.bind({});
RoundButton.args = {
  color: "primary" as ButtonColor,
  round: true,
  children: "Round",
};

export const FullWidthButton = Template.bind({});
FullWidthButton.args = {
  color: "primary" as ButtonColor,
  fullWidth: true,
  children: "FullWidth",
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  color: "primary",
  disabled: true,
  children: "Disabled",
};

export const SimpleButton = Template.bind({});
SimpleButton.args = {
  color: "primary",
  simple: true,
  children: "Simple",
};

export const BlockButton = Template.bind({});
BlockButton.args = {
  color: "primary",
  block: true,
  children: "Block",
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  color: "primary",
  link: true,
  children: "Link",
};

export const WithIconButton = () => {
  const classes = useStyles();
  return (
    <div>
      <Button color="primary">
        <Favorite className={classes.icons} />
        with icon
      </Button>
    </div>
  );
};

export const JustIconButton = () => {
  const classes = useStyles();
  return (
    <div>
      <Button justIcon color="primary">
        <Favorite className={classes.icons} />
      </Button>
      <Button justIcon round color="primary">
        <Favorite className={classes.icons} />
      </Button>
    </div>
  );
};
