import * as React from 'react';
import Chip from '@material-ui/core/Chip';

import { Color } from '../types';
import { xtermColors } from './colors';

export interface Props {
  label: string;
  fgColor: Color | number;
  bgColor: Color | number;
  onDelete?: (event: any) => void;
}

export default function PromptPart(props: Props) {
  const { label, fgColor, bgColor, onDelete } = props;

  return (
    <Chip
      label={label}
      onDelete={onDelete}
      variant={'outlined'}
      style={{
        color: typeof fgColor === 'string' ? fgColor : xtermColors[fgColor],
        backgroundColor: typeof bgColor === 'string' ? bgColor : xtermColors[bgColor],
        margin: '2px',
      }}
    />
  );
}
