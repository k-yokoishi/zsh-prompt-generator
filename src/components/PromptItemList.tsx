import * as React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface Props {
  onItemClick: (item: { displayStr: string; shStr: string; promptStr: string }) => void;
  onAddCustomText: (item: { displayStr: string; shStr: string; promptStr: string }) => void;
}

interface PromptItem {
  type: string;
  items: Array<{
    displayStr: string;
    shStr: string;
    promptStr: string;
  }>;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nested: {
      paddingLeft: '40px',
    },
    margin: {
      margin: theme.spacing(1),
    },
  })
);

export default function PromptItemList(props: Props) {
  const { onItemClick, onAddCustomText } = props;
  const classes = useStyles();
  const [customText, setCustomText] = React.useState<string>('');

  const promptItems: PromptItem[] = [
    {
      type: 'Login information',
      items: [
        { displayStr: 'User name', promptStr: 'user', shStr: '%n' },
        { displayStr: 'Hostname', promptStr: 'host', shStr: '%m' },
        { displayStr: 'Full hostname', promptStr: 'host.local', shStr: '%M' },
      ],
    },
    {
      type: 'Date and time',
      items: [
        { displayStr: 'yy-mm-dd', promptStr: '19-08-09', shStr: '%D' },
        { displayStr: 'Current time(24-hour)', promptStr: '12:28', shStr: '%T' },
        { displayStr: 'Current time(12-hour, am/pm)', promptStr: '12:28PM', shStr: '%@' },
      ],
    },
  ];
  return (
    <List>
      {promptItems.map(item => (
        <React.Fragment key={item.type}>
          <ListItem>
            <ListItemText primary={item.type} />
          </ListItem>
          {item.items.map(({ displayStr, shStr, promptStr }) => (
            <List disablePadding key={displayStr}>
              <ListItem
                button
                className={classes.nested}
                onClick={() => onItemClick({ displayStr, shStr, promptStr })}
              >
                <ListItemText primary={displayStr} />
              </ListItem>
            </List>
          ))}
        </React.Fragment>
      ))}
      <ListItem>
        <ListItemText primary="Custom text" />
      </ListItem>
      <List disablePadding key="custom-text">
        <ListItem className={classes.nested}>
          <TextField
            label="Custom text"
            variant="outlined"
            value={customText}
            onChange={e => setCustomText(e.target.value)}
          />
          <Fab
            variant="extended"
            size="small"
            color="primary"
            aria-label="add"
            className={classes.margin}
            onClick={() => {
              setCustomText('');
              onAddCustomText({ displayStr: customText, shStr: customText, promptStr: customText });
            }}
          >
            <AddIcon />
            Add
          </Fab>
        </ListItem>
      </List>
    </List>
  );
}
