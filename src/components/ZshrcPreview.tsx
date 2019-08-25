import * as React from 'react';
import copy from 'clipboard-copy';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
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
    position: 'relative',
  },
  copyIconButton: {
    position: 'absolute',
    top: '-4px',
    right: '0px',
  },
  copyIcon: {
    color: 'white',
  },
});

export default function ZshrcPreview(props: Props) {
  const { promptItems, rpromptItems = [] } = props;
  const classes = useStyles();
  const [copied, setCopied] = React.useState<boolean>(false);

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

  const onCopy = () => {
    copy(
      `PROMPT="${promptItems.map(p => toPreview(p)).join('')}"` +
        (rpromptItems.length > 0
          ? `\nRPROMPT="${rpromptItems.map(p => toPreview(p)).join('')}"`
          : '')
    );
    setCopied(true);
  };

  return (
    <Typography component="div" className={classes.zshrcPreview}>
      <Tooltip
        placement="top-start"
        title={copied ? 'Copied!' : 'Copy to clipboard'}
        className={classes.copyIconButton}
        onOpen={() => setCopied(false)}
      >
        <IconButton aria-label="copy" onClick={onCopy}>
          <FileCopyOutlinedIcon className={classes.copyIcon} />
        </IconButton>
      </Tooltip>
      <code>PROMPT="{promptItems.map(p => toPreview(p))}"</code>
      <br />
      {rpromptItems.length > 0 && <code>RPROMPT="{rpromptItems.map(p => toPreview(p))}"</code>}
    </Typography>
  );
}
