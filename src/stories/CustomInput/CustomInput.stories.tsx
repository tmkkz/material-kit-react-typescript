import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import InputAdornment from "@material-ui/core/InputAdornment";
import People from "@material-ui/icons/People";

import CustomInput, {
  ICustomInputProps,
} from "ui.components/CustomInput/CustomInput";

export default {
  title: "UI Kit React Material-UI/UI Components/CustomInput",
  component: CustomInput,
  parameters: {
    docs: {
      description: {
        component: "Custom input field with success/error message and/or icons",
      },
    },
  },
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<ICustomInputProps> = (args) => <CustomInput {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: "regular",
  inputProps: {
    placeholder: "Regular",
  },
};

Default.parameters = {
  docs: {
    description: {
      story: "text input with placeholder",
    },
  },
};

export const FloatingText = Template.bind({});

FloatingText.args = {
  labelText: "With floating label",
  id: "float",
  inputProps: {
    placeholder: "placeholder",
  },
};

FloatingText.parameters = {
  docs: {
    description: {
      story: "Label float when input start.",
    },
  },
};

export const Success = Template.bind({});

Success.args = {
  labelText: "Success input",
  id: "success",
  success: true,
  inputProps: {
    placeholder: "placeholder",
  },
};

Success.parameters = {
  docs: {
    description: {
      story: "shows success message",
    },
  },
};

export const Error = Template.bind({});

Error.args = {
  labelText: "Error input",
  id: "error",
  error: true,
  inputProps: {
    placeholder: "Error",
  },
};

Error.parameters = {
  docs: {
    description: {
      story: "shows error message",
    },
  },
};

export const WithMaterialIcon = Template.bind({});

WithMaterialIcon.args = {
  labelText: "With material Icons",
  id: "material",
  inputProps: {
    endAdornment: (
      <InputAdornment position="end">
        <People />
      </InputAdornment>
    ),
  },
};

WithMaterialIcon.parameters = {
  docs: {
    description: {
      story: "Material Icon shows end of field.",
    },
  },
};

export const WithFontAwesome = Template.bind({});

WithFontAwesome.args = {
  labelText: "With Font Awesome Icons",
  id: "font-awesome",
  inputProps: {
    endAdornment: (
      <InputAdornment position="end">
        <i className="fas fa-users" />
      </InputAdornment>
    ),
  },
};

WithFontAwesome.parameters = {
  docs: {
    description: {
      story: "Font awesome icon shows end of field.",
    },
  },
};
