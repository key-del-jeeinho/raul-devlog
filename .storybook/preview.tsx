import type { Preview } from "@storybook/react";
import withTheme from '../src/styles/withTheme'
import React from "react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      withTheme(
        <Story/>
      )
    )
  ]
};

export default preview;
