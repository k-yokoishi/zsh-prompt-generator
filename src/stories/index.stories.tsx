import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import PromptItem from '../components/PromptItem';
import Prompt from '../components/Prompt';
import PromptPreview from '../components/PromptPreview';
import ZshrcPreview from '../components/ZshrcPreview';
import PromptItemList from '../components/PromptItemList';
import PromptItemEdition from '../components/PromptItemEdition';
import ColorPicker from '../components/ColorPicker';
import Header from '../components/Header';

storiesOf('Header', module).add('header', () => <Header />);

storiesOf('PromptItem', module)
  .add('basic', () => (
    <PromptItem
      id="1"
      displayStr="white"
      fgColor="magenta"
      bgColor="black"
      onDelete={action('deleted')}
    />
  ))
  .add('selected', () => (
    <PromptItem
      id="1"
      displayStr="white"
      fgColor="magenta"
      bgColor="black"
      selected
      onDelete={action('deleted')}
    />
  ))
  .add('basic 8 colors', () => (
    <div>
      <PromptItem
        id="1"
        displayStr="black"
        fgColor="white"
        bgColor="black"
        onDelete={action('deleted')}
      />
      <PromptItem
        id="2"
        displayStr="red"
        fgColor="white"
        bgColor="red"
        onDelete={action('deleted')}
      />
      <PromptItem
        id="3"
        displayStr="green"
        fgColor="white"
        bgColor="green"
        onDelete={action('deleted')}
      />
      <PromptItem
        id="4"
        displayStr="yellow"
        fgColor="white"
        bgColor="yellow"
        onDelete={action('deleted')}
      />
      <PromptItem
        id="5"
        displayStr="blue"
        fgColor="white"
        bgColor="blue"
        onDelete={action('deleted')}
      />
      <PromptItem
        id="6"
        displayStr="magenta"
        fgColor="white"
        bgColor="red"
        onDelete={action('deleted')}
      />
      <PromptItem
        id="7"
        displayStr="cyan"
        fgColor="white"
        bgColor="cyan"
        onDelete={action('deleted')}
      />
      <PromptItem
        id="8"
        displayStr="white"
        fgColor="black"
        bgColor="white"
        onDelete={action('deleted')}
      />
    </div>
  ))
  .add('xterm 256 colors', () => (
    <div>
      {[...new Array(32)].map((_, i) => (
        <div key={i.toString()}>
          {[...new Array(8)].map((_, j) => (
            <PromptItem
              id={`${i}-${j}`}
              displayStr={(i * 8 + j).toString().padStart(3, '0')}
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
        { id: '1', displayStr: 'black', fgColor: 'white', bgColor: 'black' },
        { id: '2', displayStr: 'red', fgColor: 'white', bgColor: 'red' },
        { id: '3', displayStr: 'green', fgColor: 'white', bgColor: 'green' },
        { id: '4', displayStr: 'yellow', fgColor: 'white', bgColor: 'yellow', selected: true },
        { id: '5', displayStr: 'blue', fgColor: 'white', bgColor: 'blue' },
      ]}
      onClick={action('onClick')}
      onItemClick={action('onItemClick')}
      onDelete={action('onDelete')}
      onDragEnd={action('onDragEnd')}
    />
  ))
  .add('basic 8 bgcolors', () => (
    <Prompt
      promptItems={[
        { id: '1', displayStr: 'black', fgColor: 'black', bgColor: 'white' },
        { id: '2', displayStr: 'red', fgColor: 'red', bgColor: 'white' },
        { id: '3', displayStr: 'green', fgColor: 'green', bgColor: 'white' },
        { id: '4', displayStr: 'yellow', fgColor: 'yellow', bgColor: 'white', selected: true },
        { id: '5', displayStr: 'blue', fgColor: 'blue', bgColor: 'white' },
      ]}
      onClick={action('onClick')}
      onItemClick={action('onItemClick')}
      onDelete={action('onDelete')}
      onDragEnd={action('onDragEnd')}
    />
  ))
  .add('selected', () => (
    <Prompt
      promptItems={[
        { id: '1', displayStr: 'black', fgColor: 'black', bgColor: 'white' },
        { id: '2', displayStr: 'red', fgColor: 'red', bgColor: 'white' },
        { id: '3', displayStr: 'green', fgColor: 'green', bgColor: 'white' },
        { id: '4', displayStr: 'yellow', fgColor: 'yellow', bgColor: 'white', selected: true },
        { id: '5', displayStr: 'blue', fgColor: 'blue', bgColor: 'white' },
      ]}
      selected
      onClick={action('onClick')}
      onItemClick={action('onItemClick')}
      onDelete={action('onDelete')}
      onDragEnd={action('onDragEnd')}
    />
  ));

storiesOf('PromptPreview', module)
  .add('PROMPT', () => (
    <PromptPreview
      promptItems={[
        { promptStr: '(mypyenv)', fgColor: 'white', bgColor: 'black' },
        { promptStr: '~/work', fgColor: 'white', bgColor: 'cyan' },
        { promptStr: 'alice', fgColor: 'white', bgColor: 'blue' },
        { promptStr: '$', fgColor: 'white', bgColor: 'black' },
      ]}
    />
  ))
  .add('PROMPT and RPROMPT', () => (
    <PromptPreview
      promptItems={[
        { promptStr: '(mypyenv)', fgColor: 'white', bgColor: 'black' },
        { promptStr: '~/work', fgColor: 'white', bgColor: 'cyan' },
        { promptStr: 'alice', fgColor: 'white', bgColor: 'blue' },
        { promptStr: '$', fgColor: 'white', bgColor: 'black' },
      ]}
      rpromptItems={[
        { promptStr: 'master!*', fgColor: 'magenta', bgColor: 'black' },
        { promptStr: '[12:15]', fgColor: 'white', bgColor: 'black' },
      ]}
    />
  ));

storiesOf('ZshrcPreview', module)
  .add('initial state', () => <ZshrcPreview promptItems={[]} />)
  .add('PROMPT', () => (
    <ZshrcPreview
      promptItems={[
        { shStr: '(mypyenv)', displayStr: '(mypyenv)', fgColor: 'white', bgColor: 'black' },
        { shStr: '%~', displayStr: '~/work', fgColor: 'white', bgColor: 'cyan' },
        { shStr: '%n', displayStr: 'alice', fgColor: 'white', bgColor: 'blue' },
        { shStr: '$ ', displayStr: '$ ', fgColor: 'white', bgColor: 'black' },
      ]}
    />
  ))
  .add('PROMPT and RPROMPT', () => (
    <ZshrcPreview
      promptItems={[
        { shStr: '(mypyenv)', displayStr: '(mypyenv)', fgColor: 'white', bgColor: 'black' },
        { shStr: '%~', displayStr: '~/work', fgColor: 'white', bgColor: 'cyan' },
        { shStr: '%n', displayStr: 'alice', fgColor: 'white', bgColor: 'blue' },
        { shStr: '$ ', displayStr: '$ ', fgColor: 'white', bgColor: 'black' },
      ]}
      rpromptItems={[
        {
          // eslint-disable-next-line no-template-curly-in-string
          shStr: '${vsc_info}',
          displayStr: 'master!*',
          fgColor: 'magenta',
          bgColor: 'black',
          bold: true,
        },
        { shStr: '$*', displayStr: '[12:15]', fgColor: 'white', bgColor: 'black' },
      ]}
    />
  ));

storiesOf('PromptItemList', module).add('initial state', () => (
  <PromptItemList onItemClick={action('clicked')} />
));

storiesOf('ColorPicker', module)
  .add('Red', () => <ColorPicker value="red" onChange={action('pick')} />)
  .add('220', () => <ColorPicker value={220} onChange={action('pick')} />);

storiesOf('PromptItemEdition', module)
  .add('bg:black, fg:magenta', () => (
    <PromptItemEdition
      displayStr={'User name'}
      bold={false}
      fgColor="magenta"
      bgColor="black"
      onBoldChange={action('check bold')}
      onFgColorChange={action('change fgcolor')}
      onBgColorChange={action('change bgcolor')}
    />
  ))
  .add('bg:80, fg:230, bold', () => (
    <PromptItemEdition
      displayStr={'User name'}
      bold
      fgColor={230}
      bgColor={80}
      onBoldChange={action('check bold')}
      onFgColorChange={action('change fgcolor')}
      onBgColorChange={action('change bgcolor')}
    />
  ));
