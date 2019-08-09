import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State, changeFgColor, changeBgColor, toggleBold } from '../redux/reducer';
import PromptItemEdition from '../components/PromptItemEdition';

export default function() {
  const prompt = useSelector((state: State) => state.prompt);
  const rprompt = useSelector((state: State) => state.rprompt);
  const promptItem = [...prompt, ...rprompt].find(p => p.selected);
  const dispatch = useDispatch();

  if (!promptItem) return null;

  const { displayStr, bold, fgColor, bgColor } = promptItem;
  return (
    <PromptItemEdition
      displayStr={displayStr}
      bold={bold}
      fgColor={fgColor}
      bgColor={bgColor}
      onBoldChange={() => dispatch(toggleBold())}
      onFgColorChange={color => dispatch(changeFgColor(color))}
      onBgColorChange={color => dispatch(changeBgColor(color))}
    />
  );
}
