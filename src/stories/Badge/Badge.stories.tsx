import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Colors } from "types";
import Badge, { IBadgeProps } from "ui.components/Badge/Badge";

export default {
  title: "UI Kit React Material-UI/UI Components/Badge",
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: "Badge component",
      },
    },
  },
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<IBadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});

Default.args = {
  color: "gray" as Colors,
  children: "default",
};

export const Primary = Template.bind({});

Primary.args = {
  color: "primary" as Colors,
  children: "primary",
};

export const Warning = Template.bind({});

Warning.args = {
  color: "warning" as Colors,
  children: "warning",
};

export const Danger = Template.bind({});

Danger.args = {
  color: "danger" as Colors,
  children: "danger",
};

export const Success = Template.bind({});

Success.args = {
  color: "success" as Colors,
  children: "success",
};

export const Info = Template.bind({});

Info.args = {
  color: "info" as Colors,
  children: "info",
};

export const Rose = Template.bind({});

Rose.args = {
  color: "rose" as Colors,
  children: "rose",
};
