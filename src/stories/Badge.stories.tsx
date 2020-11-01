import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Colors } from "types";
import Badge, { IBadgeProps } from "ui.components/Badge/Badge";

export default {
  title: "UI Kit React Material-UI/UI Components/Badge",
  component: Badge,
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<IBadgeProps> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  color: Colors.Primary,
  children: "primary",
};
