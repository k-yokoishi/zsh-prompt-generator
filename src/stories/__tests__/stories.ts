import initStoryshots from '@storybook/addon-storyshots';
// `require.context()` in .storybook/config.ts is originally Webpack's func.
// It enables `require.context()` for babel.
const registerRequireContextHook = require('babel-plugin-require-context-hook/register');
registerRequireContextHook();

initStoryshots({});
