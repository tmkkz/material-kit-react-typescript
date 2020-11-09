import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Colors } from "types";
import Badge, { IBadgeProps } from "ui.components/Badge/Badge";

export default {
  title: "UI Kit React Material-UI/UI Components/Badge",
  component: Badge,
} as Meta;

type BadgeBackGround = Colors & "gray" & "badge";

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<IBadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});

Default.args = {
  color: "gray" as BadgeBackGround,
  children: "default",
};

export const Primary = Template.bind({});

Primary.args = {
  color: "primary" as BadgeBackGround,
  children: "primary",
};

export const Warning = Template.bind({});

Warning.args = {
  color: "warning" as BadgeBackGround,
  children: "warning",
};

export const Danger = Template.bind({});

Danger.args = {
  color: "danger" as BadgeBackGround,
  children: "danger",
};

export const Success = Template.bind({});

Success.args = {
  color: "success" as BadgeBackGround,
  children: "success",
};

export const Info = Template.bind({});

Info.args = {
  color: "info" as BadgeBackGround,
  children: "info",
};

export const Rose = Template.bind({});

Rose.args = {
  color: "rose" as BadgeBackGround,
  children: "rose",
};
