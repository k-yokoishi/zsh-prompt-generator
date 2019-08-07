import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CancelICon from '@material-ui/icons/Cancel';
import { makeStyles } from '@material-ui/styles';
import { PromptID, IPromptItem } from '../types';
import { getColor } from './colors';

type PromptItem = Omit<IPromptItem, 'shRepr'>;

type Props = PromptItem & {
  onClick?: (promptItem: PromptItem) => void;
  onDelete?: (id: PromptID) => void;
};

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
  const { id, label, fgColor, bgColor, selected = false, onClick, onDelete } = props;

  const classes = useStyles();

  return (
    <Typography
      component="div"
      className={classes.promptItem}
      style={{
        color: fgColor === null ? 'white' : getColor(fgColor),
        backgroundColor: bgColor === null ? '#3E3A39' : getColor(bgColor),
        ...(selected ? { border: 'solid 2px cyan' } : {}),
      }}
      onClick={
        onClick
          ? event => {
              event.stopPropagation();
              onClick({ id, label, fgColor, bgColor });
            }
          : undefined
      }
    >
      <Box className={classes.promptItemFont}>{label}</Box>
      <CancelICon
        className={classes.promptItemIcon}
        fontStyle={fgColor === null ? 'white' : getColor(fgColor)}
        onClick={
          onDelete
            ? event => {
                event.stopPropagation();
                onDelete(id);
              }
            : undefined
        }
      />
    </Typography>
  );
}
