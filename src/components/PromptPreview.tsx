import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';
import { IPromptItem } from '../types';
import { getColor } from '../components/colors';

interface Props {
  promptItems: Omit<Omit<IPromptItem, 'shRepr'>, 'id'>[];
  rpromptItems?: Omit<Omit<IPromptItem, 'shRepr'>, 'id'>[];
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

  return (
    <Typography component="div" className={classes.promptPreview}>
      <Typography component="div" className={classes.innerPromptPreview}>
        {promptItems.map((p, i) => (
          <Box
            className={classes.promptPreviewFont}
            style={{
              color: p.fgColor === null ? 'white' : getColor(p.fgColor),
              backgroundColor: p.bgColor === null ? '#3E3A39' : getColor(p.bgColor),
            }}
            key={i}
          >
            {p.label}
          </Box>
        ))}
      </Typography>
      <Typography component="div" className={classes.innerPromptPreview}>
        {rpromptItems.length > 0 &&
          rpromptItems.map((p, i) => (
            <Box
              className={classes.promptPreviewFont}
              style={{
                color: p.fgColor === null ? 'white' : getColor(p.fgColor),
                backgroundColor: p.bgColor === null ? '#3E3A39' : getColor(p.bgColor),
              }}
              key={i}
            >
              {p.label}
            </Box>
          ))}
      </Typography>
    </Typography>
  );
}
