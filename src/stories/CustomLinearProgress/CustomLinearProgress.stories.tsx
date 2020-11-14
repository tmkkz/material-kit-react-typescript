import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import CustomLinearProgress, {
  ICustomLinerProgressProps,
} from "ui.components/CustomLinerProgress/CustomLinerProgress";

export default {
  title: "UI Kit React Material-UI/UI Components/CustomLinearProgress",
  component: CustomLinearProgress,
  parameters: {
    docs: {
      description: {
        component: "Line progress bar",
      },
    },
  },
} as Meta;

const Template: Story<ICustomLinerProgressProps> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <CustomLinearProgress {...args} />
);

export const Default = Template.bind({});

Default.args = {
  color: "primary",
};

Default.parameters = {
  docs: {
    description: {
      story: "color primary",
    },
  },
};

export const Warning = Template.bind({});

Warning.args = {
  color: "warning",
  variant: "determinate",
  value: 80,
};

Warning.parameters = {
  docs: {
    description: {
      story: "color warning, determinate, value:80",
    },
  },
};

export const Danger = Template.bind({});

Danger.args = {
  color: "danger",
  variant: "buffer",
  value: 90,
  valueBuffer: 90,
};

Danger.parameters = {
  docs: {
    description: {
      story: "color danger",
    },
  },
};

export const Success = Template.bind({});

Success.args = {
  color: "success",
};

Success.parameters = {
  docs: {
    description: {
      story: "color success",
    },
  },
};

export const Info = Template.bind({});

Info.args = {
  color: "info",
};

Info.parameters = {
  docs: {
    description: {
      story: "color info",
    },
  },
};

export const Rose = Template.bind({});

Rose.args = {
  color: "rose",
};

Rose.parameters = {
  docs: {
    description: {
      story: "color rose",
    },
  },
};

export const Gray = Template.bind({});

Gray.args = {
  color: "gray",
};

Gray.parameters = {
  docs: {
    description: {
      story: "color gray",
    },
  },
};
