import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CancelICon from '@material-ui/icons/Cancel';
import { makeStyles } from '@material-ui/styles';

import { Color } from '../types';
import { getColor } from './colors';

export interface Props {
  label: string;
  fgColor: Color | number;
  bgColor: Color | number;
  selected?: boolean;
  onDelete?: (event: any) => void;
}

const useStyles = makeStyles({
  promptPart: {
    height: '32px',
    minWidth: '44px',
    margin: '2px',
    border: 'solid 2px',
    borderRadius: 25,
    display: 'inline-flex',
    alignItems: 'center',
  },
  promptPartFont: {
    fontSize: '13px',
    padding: '1px 12px 0px',
  },
  promptPartIcon: {
    margin: '0px 5px 0px -8px',
    cursor: 'pointer',
  },
});

export default function PromptPart(props: Props) {
  const { label, fgColor, bgColor, selected = false, onDelete } = props;

  const classes = useStyles();

  return (
    <Typography
      component="div"
      className={classes.promptPart}
      style={{
        color: getColor(fgColor),
        backgroundColor: getColor(bgColor),
        ...(selected ? { border: 'solid 4px cyan' } : {}),
      }}
    >
      <Box className={classes.promptPartFont}>{label}</Box>
      <CancelICon
        className={classes.promptPartIcon}
        fontStyle={getColor(fgColor)}
        onClick={onDelete}
      />
    </Typography>
  );
}
