//我不处理数据，我只是数据的搬运工
import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import reducer from './reducer.js'

const middleware = [thunk];

if(process.env.NODE_ENV != 'production'){
	const logger = createLogger({});
	middleware.push(logger);
}


const store = createStore(reducer,applyMiddleware(...middleware));

export default store;