import React from 'react';
import 'typeface-roboto';
import { Provider } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import store from './redux/store';
import Header from './components/Header';
import Prompt from './container/Prompt';
import PromptItemList from './container/PromptItemList';
import PromptPreview from './container/PromptPreview';
import ZshPreview from './container/ZshPreview';
import PromptEdition from './container/PromptItemEdition';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridItem: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  })
);

function App() {
  const classes = useStyles();
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Grid container direction="row" justify="space-between" spacing={3}>
          <Grid item xs={2}>
            <PromptItemList />
          </Grid>
          <Grid item xs={8}>
            <Grid container direction="column">
              <Grid item className={classes.gridItem}>
                <Typography variant="h5">PROMPT</Typography>
                <Prompt type="prompt" />
              </Grid>
              <Grid item className={classes.gridItem}>
                <Typography variant="h5">RPROMPT</Typography>
                <Prompt type="rprompt" />
              </Grid>
              <Grid item className={classes.gridItem}>
                <Typography variant="h5">Preview</Typography>
                <PromptPreview />
              </Grid>
              <Grid item className={classes.gridItem}>
                <Typography variant="h5">Paste your .zshrc</Typography>
                <ZshPreview />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2} className={classes.gridItem}>
            <PromptEdition />
          </Grid>
        </Grid>
      </Provider>
    </div>
  );
}

export default App;
