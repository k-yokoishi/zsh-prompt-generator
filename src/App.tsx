import React from 'react';
import 'typeface-roboto';
import { Provider } from 'react-redux';
import store from './redux/store';
import PromptItemList from './container/PromptItemList';

function App() {
  return (
    <div>
      <Provider store={store}>
        <PromptItemList />
      </Provider>
    </div>
  );
}

export default App;
