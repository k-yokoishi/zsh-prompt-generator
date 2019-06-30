import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { RoundedButton } from '../components/RoundedButton';
import PromptPart from '../components/PromptPart';

storiesOf('RoundedButton', module)
  .add(
    'with text',
    () => (
      <RoundedButton color="hotpink" onClick={action('clicked')}>
        Hello Button
      </RoundedButton>
    ),
    { info: { inline: true } }
  )
  .add(
    'with some emoji',
    () => (
      <RoundedButton color="papayawhip" onClick={action('clicked')}>
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </RoundedButton>
    ),
    { info: { inline: true } }
  );

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