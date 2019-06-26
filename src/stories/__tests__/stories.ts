import initStoryshots from '@storybook/addon-storyshots';
// `require.context()` in .storybook/config.ts is originally Webpack's func.
// It enables `require.context()` for babel.
import registerRequireContextHook from 'babel-plugin-require-context-hook/register';
registerRequireContextHook();

initStoryshots();
