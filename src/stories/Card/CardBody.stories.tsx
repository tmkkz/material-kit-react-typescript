import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import CardBody, { ICardBodyProps } from "ui.components/Card/CardBody";

export default {
  title: "UI Kit React Material-UI/UI Components/Card/CardBody",
  component: CardBody,
  parameters: {
    docs: {
      description: {
        component: "Card Header",
      },
    },
  },
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<ICardBodyProps> = (args) => <CardBody {...args} />;

export const Cardbody = Template.bind({});

Cardbody.args = {
  children:
    "Icons, images, text, any React Components.CardBody has padding and flex Style",
};
