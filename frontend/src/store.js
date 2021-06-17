import { createStore, combineReducers} from 'redux';
import { productListReducer } from './reducers/productReducers';




const reducer = combineReducers({
    productList:productListReducer,
});
const initialState = {};

const store = createStore(reducer, initialState);

export default store;