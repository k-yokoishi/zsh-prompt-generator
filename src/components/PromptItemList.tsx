import * as React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import PromptItems from './promptItems';

interface Props {
  onItemClick: (item: { displayStr: string; shStr: string; promptStr: string }) => void;
  onAddCustomText: (item: { displayStr: string; shStr: string; promptStr: string }) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nested: {
      paddingLeft: '40px',
    },
    margin: {
      margin: theme.spacing(1),
    },
    subheader: {
      backgroundColor: theme.palette.background.paper,
    },
  })
);

const PromptItemList: React.FC<Props> = ({ onItemClick, onAddCustomText }) => {
  const classes = useStyles();
  const [customText, setCustomText] = React.useState<string>('');

  return (
    <List subheader={<ListSubheader>Prompt Items</ListSubheader>} className={classes.subheader}>
      {PromptItems.map(item => (
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
              onAddCustomText({
                displayStr: customText,
                shStr: customText,
                promptStr: customText,
              });
            }}
          >
            <AddIcon />
            Add
          </Fab>
        </ListItem>
      </List>
    </List>
  );
};
export default PromptItemList;
