
import React from 'react';
import { Button , Input} from '@material-ui/core';
import TrialView from './trial';


// create the saga middleware
// const sagaMiddleware = createSagaMiddleware();
// View Redux Store in Chrome DevTools
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

// then run the saga
// sagaMiddleware.run(sagas);

function App() {
  return (
  <TrialView />
  );
}

export default App;
