import { configureStore } from '@reduxjs/toolkit'
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import artworksReducer from './artworks';

// const reducers = combineReducers({
//   artworksReducer,
// });
export default configureStore({
  reducer: {artworksReducer} //add reducers here
})

