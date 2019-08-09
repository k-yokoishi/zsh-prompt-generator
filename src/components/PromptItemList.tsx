import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/styles';

interface Props {
  onItemClick: (item: { displayStr: string; shStr: string; promptStr: string }) => void;
}

interface PromptItem {
  type: string;
  items: Array<{
    displayStr: string;
    shStr: string;
    promptStr: string;
  }>;
}

const useStyles = makeStyles({
  nested: {
    paddingLeft: '40px',
  },
});

export default function PromptItemList(props: Props) {
  const { onItemClick } = props;
  const classes = useStyles();

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
    </List>
  );
}
