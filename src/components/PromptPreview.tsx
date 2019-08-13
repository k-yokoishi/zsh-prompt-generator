import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';
import { IPromptItem } from '../types';
import { getColor } from '../components/colors';

type PromptItem = Omit<Omit<Omit<IPromptItem, 'shStr'>, 'id'>, 'displayStr'>;

interface Props {
  promptItems: PromptItem[];
  rpromptItems?: PromptItem[];
}

const useStyles = makeStyles({
  promptPreview: {
    background: '#3E3A39',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px',
    borderRadius: '4px',
  },
  innerPromptPreview: {
    background: '#3E3A39',
    display: 'flex',
    padding: '0px 4px',
    height: '32px',
    alignItems: 'center',
  },
  promptPreviewFont: {
    lineHeight: '32px',
    letterSpacing: 1,
    padding: '0px 1px',
  },
});

export default function PromptPreview(props: Props) {
  const { promptItems, rpromptItems = [] } = props;
  const classes = useStyles();

  const renderPromptItem = (promptItems: PromptItem[]) => (
    <Typography component="div" className={classes.innerPromptPreview}>
      {promptItems.length > 0 &&
        promptItems.map((p, i) => (
          <Box
            className={classes.promptPreviewFont}
            style={{
              color: p.fgColor === null ? 'white' : getColor(p.fgColor),
              backgroundColor: p.bgColor === null ? '#3E3A39' : getColor(p.bgColor),
              fontWeight: p.bold ? 'bold' : undefined,
            }}
            key={i}
          >
            {' '}
            {p.promptStr}
          </Box>
        ))}
    </Typography>
  );

  return (
    <Typography component="div" className={classes.promptPreview}>
      {renderPromptItem(promptItems)}
      {renderPromptItem(rpromptItems)}
    </Typography>
  );
}
