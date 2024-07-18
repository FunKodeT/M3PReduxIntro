import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
// import {createStore, combineReducers} from 'redux';
import allReducers from './reducers';
// import counterReducer from './reducers/counter';
// import loggedReducer from './reducers/isLogged';
import {Provider} from 'react-redux';

const store = createStore(
	allReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// const store = createStore(allReducers);
// const store = createStore();
// const store = createStore(counterReducer, loggedReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>
);

reportWebVitals();

/* let trash1 = {
  // import React from 'react';
  // import ReactDOM from 'react-dom/client';
  // import './index.css';
  // import App from './App';
  // import reportWebVitals from './reportWebVitals';
  // // import * as serviceWorker from './serviceWorker';
  // import {createStore} from 'redux';
  // // let store = createStore(counter);
  
  // // STORE - GLOBALIZED STATE
  
  // // ACTION INCREMENT
  // const increment = () => {
  // 	return {
  // 		type: 'INCREMENT',
  // 	};
  // };
  // const decrement = () => {
  // 	return {
  // 		type: 'DECREMENT',
  // 	};
  // };
  
  // // REDUCER
  // const counter = (state = 0, action) => {
  // 	switch (action.type) {
  // 		case 'INCREMENT':
  // 			return state + 1;
  // 		case 'DECREMENT':
  // 			return state - 1;
  // 	}
  // };
  
  // let store = createStore(counter);
  
  // // DISPLAY IN CONSOLE
  // store.subscribe(() => console.log(store.getState()));
  
  // // DISPATCH
  // store.dispatch(increment());
  // store.dispatch(decrement());
  
  // // ReactDOM.render(<App />, document.getElementById('root'));
  
  // // serviceWorker.unregister();
  
  // const root = ReactDOM.createRoot(document.getElementById('root'));
  // root.render(
  // 	<React.StrictMode>
  // 		<App />
  // 	</React.StrictMode>
  // );
  
  // reportWebVitals();
  } */
