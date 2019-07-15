import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/styles';

interface Props {
  onItemClick: (item: { label: string; shRepr: string }) => void;
}

interface PromptItem {
  type: string;
  items: Array<{
    label: string;
    shRepr: string;
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
        { label: 'User name', shRepr: '%n' },
        { label: 'Hostname', shRepr: '%m' },
        { label: 'Full hostname', shRepr: '%M' },
      ],
    },
    {
      type: 'Date and time',
      items: [
        { label: 'yyyy-mm-dd', shRepr: '%D' },
        { label: 'Current time(24-hour)', shRepr: '%T' },
        { label: 'Current time(12-hour, am/pm)', shRepr: '%@' },
        { label: 'Date(day-dd)', shRepr: '%w' },
        { label: 'Date(mm/dd/yy)', shRepr: '%w' },
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
          {item.items.map(({ label, shRepr }) => (
            <List disablePadding key={label}>
              <ListItem
                button
                className={classes.nested}
                onClick={() => onItemClick({ label, shRepr })}
              >
                <ListItemText primary={label} />
              </ListItem>
            </List>
          ))}
        </React.Fragment>
      ))}
    </List>
  );
}
