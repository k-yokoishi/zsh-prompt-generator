import { IPromptItem, PromptID } from './../types';
import { createSlice, PayloadAction } from 'redux-starter-kit';
import uuid from 'uuid/v4';

export interface State {
  prompt: Required<IPromptItem>[];
  rprompt: Required<IPromptItem>[];
  selectedPrompt: 'prompt' | 'rprompt';
  selectedPromptItem: PromptID | null;
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
    selectPrompt: (state: State, { payload }: PayloadAction<'prompt' | 'rprompt'>) => {
      Object.assign(state, { selectedPrompt: payload });
    },
    selectPromptItem: (state: State, { payload }: PayloadAction<Omit<IPromptItem, 'shRepr'>>) => {
      const { id } = payload;
      Object.assign(state, {
        prompt: state.prompt.map(p => Object.assign(p, { selected: p.id === id })),
      });
      Object.assign(state, {
        rprompt: state.rprompt.map(p => Object.assign(p, { selected: p.id === id })),
      });
    },
    addPromptItem: (
      state: State,
      { payload }: PayloadAction<{ label: string; shRepr: string }>
    ) => {
      const prompt = state.selectedPrompt === 'prompt' ? state.prompt : state.rprompt;
      prompt.push({
        id: uuid(),
        fgColor: null,
        bgColor: null,
        bold: false,
        selected: false,
        ...payload,
      });
    },
    deletePromptItem: (state: State, { payload }: PayloadAction<PromptID>) => {
      Object.assign(state, { prompt: state.prompt.filter(p => p.id !== payload) });
      Object.assign(state, { rprompt: state.rprompt.filter(p => p.id !== payload) });
    },
  },
});

export const {
  reducer,
  actions: { initialize, selectPrompt, selectPromptItem, addPromptItem, deletePromptItem },
} = promptReducer;
