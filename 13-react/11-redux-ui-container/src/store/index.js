//我不处理数据，我只是数据的搬运工
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer.js';

const store = createStore(reducer,applyMiddleware(thunk));

export default store;