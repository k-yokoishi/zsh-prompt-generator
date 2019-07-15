import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CancelICon from '@material-ui/icons/Cancel';
import { makeStyles } from '@material-ui/styles';
import { IPromptItem } from '../types';
import { getColor } from './colors';

export interface Props extends IPromptItem {
  selected?: boolean;
  onDelete?: (event: any) => void;
}

const useStyles = makeStyles({
  promptItem: {
    height: '32px',
    minWidth: '44px',
    margin: '2px',
    border: 'solid 2px',
    borderRadius: 25,
    display: 'inline-flex',
    alignItems: 'center',
  },
  promptItemFont: {
    fontSize: '13px',
    padding: '1px 12px 0px',
  },
  promptItemIcon: {
    margin: '0px 5px 0px -8px',
    cursor: 'pointer',
  },
});

export default function PromptItem(props: Props) {
  const { label, fgColor, bgColor, selected = false, onDelete } = props;

  const classes = useStyles();

  return (
    <Typography
      component="div"
      className={classes.promptItem}
      style={{
        color: getColor(fgColor),
        backgroundColor: getColor(bgColor),
        ...(selected ? { border: 'solid 4px cyan' } : {}),
      }}
    >
      <Box className={classes.promptItemFont}>{label}</Box>
      <CancelICon
        className={classes.promptItemIcon}
        fontStyle={getColor(fgColor)}
        onClick={onDelete}
      />
    </Typography>
  );
}
