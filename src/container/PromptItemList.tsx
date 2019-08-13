import * as React from 'react';
import { useDispatch } from 'react-redux';
import PromptItemList from '../components/PromptItemList';
import { addPromptItem } from '../redux/reducer';

export default function() {
  const dispatch = useDispatch();
  return (
    <PromptItemList
      onItemClick={({ displayStr, shStr, promptStr }) =>
        dispatch(addPromptItem({ displayStr, shStr, promptStr }))
      }
      onAddCustomText={({ displayStr, shStr, promptStr }) =>
        dispatch(addPromptItem({ displayStr, shStr, promptStr }))
      }
    />
  );
}
