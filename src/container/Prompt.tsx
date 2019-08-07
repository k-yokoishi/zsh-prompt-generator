import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State, selectPrompt, selectPromptItem, deletePromptItem } from '../redux/reducer';
import { IPromptItem } from '../types';

import Prompt from '../components/Prompt';

type Props = {
  type: 'prompt' | 'rprompt';
};

export default function({ type }: Props) {
  const prompt = useSelector((state: State) => (type === 'prompt' ? state.prompt : state.rprompt));
  const selectedPrompt = useSelector((state: State) => state.selectedPrompt);
  const dispatch = useDispatch();

  return (
    <Prompt
      promptItems={prompt}
      selected={type === selectedPrompt}
      onClick={() => dispatch(selectPrompt(type))}
      onItemClick={(promptItem: Omit<IPromptItem, 'shRepr'>) => {
        dispatch(selectPromptItem(promptItem));
      }}
      onDelete={(...args) => dispatch(deletePromptItem(...args))}
    />
  );
}
