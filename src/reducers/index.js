import { combineReducers } from 'redux';
import counterReducer from './counter';
import isLoginReducer from './isLogin';

// 例: 他のreducerをインポート
// import userReducer from './userReducer';
// import postsReducer from './postsReducer';

const allReducer = combineReducers({
  counter: counterReducer,
  login: isLoginReducer,
});

export default allReducer;