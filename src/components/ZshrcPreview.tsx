import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { IPromptItem } from '../types';

interface Props {
  promptItems: Omit<IPromptItem, 'id'>[];
  rpromptItems?: Omit<IPromptItem, 'id'>[];
}

const useStyles = makeStyles({
  zshrcPreview: {
    border: 'solid 1px',
    borderRadius: '4px',
    padding: '8px',
    color: 'white',
    backgroundColor: '#3E3A39',
  },
});

export default function ZshrcPreview(props: Props) {
  const { promptItems, rpromptItems = [] } = props;
  const classes = useStyles();

  const toPreview = (part: Omit<IPromptItem, 'id'>): string => {
    let { shRepr, fgColor, bgColor } = part;

    if (fgColor) {
      shRepr = `%F{${fgColor}}${shRepr}%f`;
    }

    if (bgColor) {
      shRepr = `%K{${bgColor}}${shRepr}%k`;
    }

    if (part.bold) {
      shRepr = `%B${shRepr}%b`;
    }
    return shRepr;
  };

  return (
    <Typography component="div" className={classes.zshrcPreview}>
      <code>PROMPT="{promptItems.map(p => toPreview(p))}"</code>
      <br />
      {rpromptItems.length > 0 && <code>RPROMPT="{rpromptItems.map(p => toPreview(p))}"</code>}
    </Typography>
  );
}
