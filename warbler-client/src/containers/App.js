import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '../store';
import {BrowserRouter as Router} from 'react-router-dom';

const store = configureStore();
 function App()  {
  return (
<Provider store={store}>
  <Router>
    <div>Hi Ganja</div>
  </Router>
</Provider>
    );

}

export default App;
