import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Footer, { IFooterProps } from "ui.components/Footer/Footer";

export default {
  title: "UI Kit React Material-UI/UI Components/Footer",
  component: Footer,
  parameters: {
    docs: {
      description: {
        component: "Footer",
      },
    },
  },
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<IFooterProps> = (args) => <Footer {...args} />;

export const Default = Template.bind({});

Default.args = {
  links: [
    { anchorText: "Google", href: "https://www.google.com" },
    { anchorText: "facebook", href: "https://facebook.com" },
    { anchorText: "Twitter", href: "https://twitter.com" },
  ],
  copyRightUrl: "https://creative-tim.com",
  copyRightAnchorText: "Creative-tim",
  copy: "This is our vision!",
};

Default.parameters = {
  docs: {
    description: {
      story: "Footer sample",
    },
  },
};
