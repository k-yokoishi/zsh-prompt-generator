import React from 'react';
import 'typeface-roboto';
import { Provider } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import store from './redux/store';
import Header from './components/Header';
import Prompt from './container/Prompt';
import PromptItemList from './container/PromptItemList';
import PromptPreview from './container/PromptPreview';
import ZshPreview from './container/ZshPreview';
import PromptEdition from './container/PromptItemEdition';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Grid container direction="row" justify="space-between" spacing={2}>
          <Grid item xs={2}>
            <PromptItemList />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h5">PROMPT</Typography>
            <Prompt type="prompt" />
            <Typography variant="h5">RPROMPT</Typography>
            <Prompt type="rprompt" />
            <Typography variant="h5">Preview</Typography>
            <PromptPreview />
            <Typography variant="h5">Paste your .zshrc</Typography>
            <ZshPreview />
          </Grid>
          <Grid item xs={2}>
            <PromptEdition />
          </Grid>
        </Grid>
      </Provider>
    </div>
  );
}

export default App;
