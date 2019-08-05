import { IPromptItem } from './../types';
import { createSlice, PayloadAction } from 'redux-starter-kit';
import uuid from 'uuid/v4';

type ID = string;

interface IdentifiablePromptItem extends IPromptItem {
  id: ID;
}

export interface State {
  prompt: IdentifiablePromptItem[];
  rprompt: IdentifiablePromptItem[];
  selectedPrompt: 'prompt' | 'rprompt';
  selectedPromptItem: ID | null;
}

const initialState: State = {
  prompt: [],
  rprompt: [],
  selectedPrompt: 'prompt',
  selectedPromptItem: null,
};

const promptReducer = createSlice({
  initialState,
  reducers: {
    initialize: () => initialState,
    selectPrompt: (state: State, { payload }: PayloadAction<'left' | 'right'>) => {
      Object.assign(state, { selectedPrompt: payload });
    },
    addPromptItem: (
      state: State,
      { payload }: PayloadAction<{ label: string; shRepr: string }>
    ) => {
      if (state.selectedPrompt === 'prompt') {
        state.prompt.push({ id: uuid(), fgColor: null, bgColor: null, ...payload });
      } else {
        state.rprompt.push({ id: uuid(), fgColor: null, bgColor: null, ...payload });
      }
    },
  },
});

export const {
  reducer,
  actions: { initialize, selectPrompt, addPromptItem },
} = promptReducer;
