import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Check from "@material-ui/icons/Check";
import Snackbar, {
  ISnackbarProps,
} from "ui.components/Snackbar/SnackbarContent";

export default {
  title: "UI Kit React Material-UI/UI Components/Snakbar",
  component: Snackbar,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<ISnackbarProps> = (args) => <Snackbar {...args} />;

export const Default = Template.bind({});

Default.args = {
  message: (
    <span>
      <b>INFO ALERT(Default Color):</b> You&apos; ve got some friends nearby,
      stop looking at your phone and find them...
    </span>
  ),
  close: true,
  icon: Check,
};

Default.parameters = {
  docs: {
    description: {
      story: "Default color(no color prop) Snackbar with icon & close button",
    },
  },
};

export const Success = Template.bind({});

Success.args = {
  message: (
    <span>
      <b>Success ALERT:</b> You&apos; ve got some friends nearby, stop looking
      your phone and find them...
    </span>
  ),
  color: "success",
  close: true,
  icon: Check,
};

Success.parameters = {
  docs: {
    description: {
      story: "Success color Snackbar with icon & close button",
    },
  },
};

export const Warning = Template.bind({});

Warning.args = {
  message: (
    <span>
      <b>Warning ALERT:</b> You&apos; ve got some friends nearby, stop looking
      at your phone and find them...
    </span>
  ),
  color: "warning",
  close: true,
  icon: Check,
};

Warning.parameters = {
  docs: {
    description: {
      story: "Warning color Snackbar with icon & close button",
    },
  },
};

export const Danger = Template.bind({});

Danger.args = {
  message: (
    <span>
      <b>Danger ALERT:</b> You&apos; ve got some friends nearby, stop looking at
      your phone and find them...
    </span>
  ),
  color: "danger",
  close: true,
  icon: Check,
};

Danger.parameters = {
  docs: {
    description: {
      story: "Danger color Snackbar with icon & close button",
    },
  },
};

export const Primary = Template.bind({});

Primary.args = {
  message: (
    <span>
      <b>Primary ALERT:</b> You&apos; ve got some friends nearby, stop looking
      your phone and find them...
    </span>
  ),
  color: "primary",
  close: true,
  icon: Check,
};

Primary.parameters = {
  docs: {
    description: {
      story: "Primary color Snackbar with icon & close button",
    },
  },
};
