import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import LastPageIcon from "@material-ui/icons/LastPage";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import { Colors } from "types";
import Pagination, {
  IPaginationProps,
} from "ui.components/Pagination/Pagination";

export default {
  title: "UI Kit React Material-UI/UI Components/Pagination",
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component:
          "Pagination Component. This component is alfer version on material-lab",
      },
    },
  },
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<IPaginationProps> = (args) => <Pagination {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  color: "primary" as Colors,
  count: 10,
};

export const Warning = Template.bind({});

Warning.args = {
  color: "warning" as Colors,
  count: 10,
};

export const Danger = Template.bind({});

Danger.args = {
  color: "danger" as Colors,
  count: 10,
};

export const Success = Template.bind({});
Success.parameters = {
  docs: {
    description: {
      story:
        "boundaryCount property is Number of always visible pages at the beginning and end.",
    },
  },
};
Success.args = {
  color: "success" as Colors,
  count: 10,
  boundaryCount: 2,
};

export const Info = Template.bind({});
Info.parameters = {
  docs: {
    description: {
      story: "Display Icons(First Page, Previous Page, Next Page, Last Page)",
    },
  },
};

Info.args = {
  color: "info" as Colors,
  count: 10,
  firstText: FirstPageIcon,
  previousText: NavigateBeforeIcon,
  nextText: NavigateNextIcon,
  lastText: LastPageIcon,
  showFirstButton: true,
  showLastButton: true,
};

export const Rose = Template.bind({});
Rose.parameters = {
  docs: {
    description: {
      story: "Display Text(First Page, Previous Page, Next Page, Last Page)",
    },
  },
};
Rose.args = {
  color: "rose" as Colors,
  count: 11,
  siblingCount: 3,
  firstText: "Fisrt",
  previousText: "Prev",
  nextText: "Next",
  lastText: "Last",
  showFirstButton: true,
  showLastButton: true,
};
