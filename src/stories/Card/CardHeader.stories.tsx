import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import CardHeader, { ICardHeaderProps } from "ui.components/Card/CardHeader";

export default {
  title: "UI Kit React Material-UI/UI Components/Card/CardHeader",
  component: CardHeader,
  parameters: {
    docs: {
      description: {
        component: "Card Header",
      },
    },
  },
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<ICardHeaderProps> = (args) => <CardHeader {...args} />;

export const PrimaryCardHeader = Template.bind({});

PrimaryCardHeader.args = {
  color: "primary",
  plain: true,
  children: "Icons, images, text, any React Components",
};

export const WarningCardHeader = Template.bind({});

WarningCardHeader.args = {
  color: "warning",
  plain: true,
  children: "Icons, images, text, any React Components",
};

export const DangerCardHeader = Template.bind({});

DangerCardHeader.args = {
  color: "danger",
  plain: true,
  children: "Icons, images, text, any React Components",
};

export const SuccessCardHeader = Template.bind({});

SuccessCardHeader.args = {
  color: "success",
  plain: true,
  children: "Icons, images, text, any React Components",
};

export const InfoCardHeader = Template.bind({});

InfoCardHeader.args = {
  color: "info",
  plain: true,
  children: "Icons, images, text, any React Components",
};
