import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import PromptPart from '../components/PromptPart';
import Prompt from '../components/Prompt';

storiesOf('PromptPart', module)
  .add('basic 8 colors', () => (
    <div>
      <PromptPart label="black" fgColor="white" bgColor="black" onDelete={action('deleted')} />
      <PromptPart label="red" fgColor="white" bgColor="red" onDelete={action('deleted')} />
      <PromptPart label="green" fgColor="white" bgColor="green" onDelete={action('deleted')} />
      <PromptPart label="yellow" fgColor="white" bgColor="yellow" onDelete={action('deleted')} />
      <PromptPart label="blue" fgColor="white" bgColor="blue" onDelete={action('deleted')} />
      <PromptPart label="magenta" fgColor="white" bgColor="red" onDelete={action('deleted')} />
      <PromptPart label="cyan" fgColor="white" bgColor="cyan" onDelete={action('deleted')} />
      <PromptPart label="white" fgColor="black" bgColor="white" onDelete={action('deleted')} />
    </div>
  ))
  .add('xterm 256 colors', () => (
    <div>
      {[...new Array(32)].map((_, i) => (
        <div key={i.toString()}>
          {[...new Array(8)].map((_, j) => (
            <PromptPart
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
      promptParts={[
        { label: 'black', fgColor: 'white', bgColor: 'black' },
        { label: 'red', fgColor: 'white', bgColor: 'red' },
        { label: 'green', fgColor: 'white', bgColor: 'green' },
        { label: 'yellow', fgColor: 'white', bgColor: 'yellow' },
        { label: 'blue', fgColor: 'white', bgColor: 'blue' },
      ]}
      onDelete={action('onDelete')}
      onDragEnd={action('onDragEnd')}
    />
  ))
  .add('basic 8 bgcolors', () => (
    <Prompt
      promptParts={[
        { label: 'black', fgColor: 'black', bgColor: 'white' },
        { label: 'red', fgColor: 'red', bgColor: 'white' },
        { label: 'green', fgColor: 'green', bgColor: 'white' },
        { label: 'yellow', fgColor: 'yellow', bgColor: 'white' },
        { label: 'blue', fgColor: 'blue', bgColor: 'white' },
      ]}
      onDelete={action('onDelete')}
      onDragEnd={action('onDragEnd')}
    />
  ));
