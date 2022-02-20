import { createStore, applyMiddleware, Store} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';

const configureStore = () => {
  const store: Store = createStore(userReducer, composeWithDevTools(applyMiddleware(thunk)))
  return { store }
}

export default configureStore
