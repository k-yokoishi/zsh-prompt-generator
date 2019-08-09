import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { IPromptItem } from '../types';

type PromptItem = Omit<Omit<IPromptItem, 'id'>, 'promptStr'>;

interface Props {
  promptItems: PromptItem[];
  rpromptItems?: PromptItem[];
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

  const toPreview = (part: PromptItem): string => {
    let { shStr, fgColor, bgColor } = part;

    if (fgColor) {
      shStr = `%F{${fgColor}}${shStr}%f`;
    }

    if (bgColor) {
      shStr = `%K{${bgColor}}${shStr}%k`;
    }

    if (part.bold) {
      shStr = `%B${shStr}%b`;
    }
    return shStr;
  };

  return (
    <Typography component="div" className={classes.zshrcPreview}>
      <code>PROMPT="{promptItems.map(p => toPreview(p))}"</code>
      <br />
      {rpromptItems.length > 0 && <code>RPROMPT="{rpromptItems.map(p => toPreview(p))}"</code>}
    </Typography>
  );
}
