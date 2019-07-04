import * as React from 'react';
import CancelICon from '@material-ui/icons/Cancel';

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
    <div
      style={{
        height: '32px',
        minWidth: '44px',
        margin: '2px',
        color: typeof fgColor === 'string' ? fgColor : xtermColors[fgColor],
        backgroundColor: typeof bgColor === 'string' ? bgColor : xtermColors[bgColor],
        borderRadius: 25,
        display: 'inline-flex',
        alignItems: 'center',
      }}
    >
      <span style={{ fontSize: '13px', padding: '1px 12px 0px' }}>{label}</span>
      <CancelICon
        style={{
          color: typeof fgColor === 'string' ? fgColor : xtermColors[fgColor],
          margin: '0px 5px 0px -8px',
          cursor: 'pointer',
        }}
        onClick={onDelete}
      />
    </div>
  );
}
