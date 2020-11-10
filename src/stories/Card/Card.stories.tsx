import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Card, { ICardProps } from "ui.components/Card/Card";

export default {
  title: "UI Kit React Material-UI/UI Components/Card",
  component: Card,
  parameters: {
    docs: {
      description: {
        component: "Card component wrapped CardHeader, CardBody, CardFooter",
      },
    },
  },
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<ICardProps> = (args) => <Card {...args} />;

export const CardWrapper = Template.bind({});

CardWrapper.args = {
  plain: true,
  children: "Card contents.",
};
