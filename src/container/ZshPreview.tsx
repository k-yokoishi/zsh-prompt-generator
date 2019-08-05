import * as React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../redux/reducer';

import ZshrcPreview from '../components/ZshrcPreview';

export default function() {
  const prompt = useSelector((state: State) => state.prompt);
  const rprompt = useSelector((state: State) => state.rprompt);

  return <ZshrcPreview promptItems={prompt} rpromptItems={rprompt} />;
}
