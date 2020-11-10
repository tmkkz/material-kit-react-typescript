import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import CardFooter, { ICardFooterProps } from "ui.components/Card/CardFooter";

export default {
  title: "UI Kit React Material-UI/UI Components/Card/CardFooter",
  component: CardFooter,
  parameters: {
    docs: {
      description: {
        component: "Card Header",
      },
    },
  },
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<ICardFooterProps> = (args) => <CardFooter {...args} />;

export const Cardfooter = Template.bind({});

Cardfooter.args = {
  children: "Icons, images, text, any React Components",
};
