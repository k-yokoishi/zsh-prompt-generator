import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /\.stories\.tsx$/);

function loadStories() {
  // TODO: customize info
  // https://storybook.js.org/docs/configurations/typescript-config/#customizing-type-annotationsdescriptions
  addDecorator(withInfo);
  req.keys().forEach(req);
}

configure(loadStories, module);
