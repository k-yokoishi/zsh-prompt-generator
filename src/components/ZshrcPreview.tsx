import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { IPromptPart } from '../types';

interface ShPromptPart extends IPromptPart {
  shRepr: string;
}

interface Props {
  promptParts: ShPromptPart[];
  rpromptParts?: ShPromptPart[];
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
  const { promptParts, rpromptParts = [] } = props;
  const classes = useStyles();

  const toPreview = (part: ShPromptPart): string => {
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
      <code>PROMPT="{promptParts.map(p => toPreview(p))}"</code>
      <br />
      {rpromptParts.length > 0 && <code>RPROMPT="{rpromptParts.map(p => toPreview(p))}"</code>}
    </Typography>
  );
}
