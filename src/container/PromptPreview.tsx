import * as React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../redux/reducer';

import PromptPreview from '../components/PromptPreview';

export default function() {
  const prompt = useSelector((state: State) => state.prompt);
  const rprompt = useSelector((state: State) => state.rprompt);

  return <PromptPreview promptItems={prompt} rpromptItems={rprompt} />;
}
