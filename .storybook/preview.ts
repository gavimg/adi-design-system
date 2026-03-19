import type { Preview } from '@storybook/react';
import '../src/styles/index.scss';

const preview: Preview = {
  parameters: {
    layout: 'centered'
  },
  globalTypes: {
    theme: {
      description: 'Theme mode',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' }
        ]
      }
    }
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme as string;
      document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');
      return Story();
    }
  ]
};

export default preview;
