import { configure } from '@storybook/react';

configure(require.context('../src/lib', true, /\.stories\.js$/), module);
