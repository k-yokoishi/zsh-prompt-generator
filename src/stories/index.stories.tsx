import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import PromptItem from '../components/PromptItem';
import Prompt from '../components/Prompt';
import PromptPreview from '../components/PromptPreview';
import ZshrcPreview from '../components/ZshrcPreview';
import PromptItemList from '../components/PromptItemList';

storiesOf('PromptItem', module)
  .add('basic', () => (
    <PromptItem label="white" fgColor="magenta" bgColor="black" onDelete={action('deleted')} />
  ))
  .add('selected', () => (
    <PromptItem
      label="white"
      fgColor="magenta"
      bgColor="black"
      selected
      onDelete={action('deleted')}
    />
  ))
  .add('basic 8 colors', () => (
    <div>
      <PromptItem label="black" fgColor="white" bgColor="black" onDelete={action('deleted')} />
      <PromptItem label="red" fgColor="white" bgColor="red" onDelete={action('deleted')} />
      <PromptItem label="green" fgColor="white" bgColor="green" onDelete={action('deleted')} />
      <PromptItem label="yellow" fgColor="white" bgColor="yellow" onDelete={action('deleted')} />
      <PromptItem label="blue" fgColor="white" bgColor="blue" onDelete={action('deleted')} />
      <PromptItem label="magenta" fgColor="white" bgColor="red" onDelete={action('deleted')} />
      <PromptItem label="cyan" fgColor="white" bgColor="cyan" onDelete={action('deleted')} />
      <PromptItem label="white" fgColor="black" bgColor="white" onDelete={action('deleted')} />
    </div>
  ))
  .add('xterm 256 colors', () => (
    <div>
      {[...new Array(32)].map((_, i) => (
        <div key={i.toString()}>
          {[...new Array(8)].map((_, j) => (
            <PromptItem
              label={(i * 8 + j).toString().padStart(3, '0')}
              fgColor="white"
              bgColor={i * 8 + j}
              onDelete={action('deleted')}
              key={j.toString()}
            />
          ))}
        </div>
      ))}
    </div>
  ));

// FIXME: Storyshots will never pass (due to ref?)
storiesOf('⚠️Prompt', module)
  .add('basic 8 fgcolors', () => (
    <Prompt
      promptItems={[
        { label: 'black', fgColor: 'white', bgColor: 'black' },
        { label: 'red', fgColor: 'white', bgColor: 'red' },
        { label: 'green', fgColor: 'white', bgColor: 'green' },
        { label: 'yellow', fgColor: 'white', bgColor: 'yellow', selected: true },
        { label: 'blue', fgColor: 'white', bgColor: 'blue' },
      ]}
      onDelete={action('onDelete')}
      onDragEnd={action('onDragEnd')}
    />
  ))
  .add('basic 8 bgcolors', () => (
    <Prompt
      promptItems={[
        { label: 'black', fgColor: 'black', bgColor: 'white' },
        { label: 'red', fgColor: 'red', bgColor: 'white' },
        { label: 'green', fgColor: 'green', bgColor: 'white' },
        { label: 'yellow', fgColor: 'yellow', bgColor: 'white', selected: true },
        { label: 'blue', fgColor: 'blue', bgColor: 'white' },
      ]}
      onDelete={action('onDelete')}
      onDragEnd={action('onDragEnd')}
    />
  ));

storiesOf('Prompt Preview', module)
  .add('PROMPT', () => (
    <PromptPreview
      promptItems={[
        { label: '(mypyenv)', fgColor: 'white', bgColor: 'black' },
        { label: '~/work', fgColor: 'white', bgColor: 'cyan' },
        { label: 'alice', fgColor: 'white', bgColor: 'blue' },
        { label: '$', fgColor: 'white', bgColor: 'black' },
      ]}
    />
  ))
  .add('PROMPT and RPROMPT', () => (
    <PromptPreview
      promptItems={[
        { label: '(mypyenv)', fgColor: 'white', bgColor: 'black' },
        { label: '~/work', fgColor: 'white', bgColor: 'cyan' },
        { label: 'alice', fgColor: 'white', bgColor: 'blue' },
        { label: '$', fgColor: 'white', bgColor: 'black' },
      ]}
      rpromptItems={[
        { label: 'master!*', fgColor: 'magenta', bgColor: 'black' },
        { label: '[12:15]', fgColor: 'white', bgColor: 'black' },
      ]}
    />
  ));

storiesOf('Zshrc Preview', module)
  .add('initial state', () => <ZshrcPreview promptItems={[]} />)
  .add('PROMPT', () => (
    <ZshrcPreview
      promptItems={[
        { shRepr: '(mypyenv)', label: '(mypyenv)', fgColor: 'white', bgColor: 'black' },
        { shRepr: '%~', label: '~/work', fgColor: 'white', bgColor: 'cyan' },
        { shRepr: '%n', label: 'alice', fgColor: 'white', bgColor: 'blue' },
        { shRepr: '$ ', label: '$ ', fgColor: 'white', bgColor: 'black' },
      ]}
    />
  ))
  .add('PROMPT and RPROMPT', () => (
    <ZshrcPreview
      promptItems={[
        { shRepr: '(mypyenv)', label: '(mypyenv)', fgColor: 'white', bgColor: 'black' },
        { shRepr: '%~', label: '~/work', fgColor: 'white', bgColor: 'cyan' },
        { shRepr: '%n', label: 'alice', fgColor: 'white', bgColor: 'blue' },
        { shRepr: '$ ', label: '$ ', fgColor: 'white', bgColor: 'black' },
      ]}
      rpromptItems={[
        {
          // eslint-disable-next-line no-template-curly-in-string
          shRepr: '${vsc_info}',
          label: 'master!*',
          fgColor: 'magenta',
          bgColor: 'black',
          bold: true,
        },
        { shRepr: '$*', label: '[12:15]', fgColor: 'white', bgColor: 'black' },
      ]}
    />
  ));

storiesOf('Prompt Item List', module).add('initial state', () => (
  <PromptItemList onItemClick={action('clicked')} />
));
