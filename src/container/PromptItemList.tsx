import * as React from 'react';
import { useDispatch } from 'react-redux';
import PromptItemList from '../components/PromptItemList';
import { addPromptItem } from '../redux/reducer';

export default function() {
  const dispatch = useDispatch();
  return (
    <PromptItemList
      onItemClick={({ label, shRepr }) => dispatch(addPromptItem({ label, shRepr }))}
    />
  );
}
