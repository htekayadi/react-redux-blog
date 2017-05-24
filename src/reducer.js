import article from './reducers/article';
import articleList from './reducers/articleList';
import auth from './reducers/auth';
import common from './reducers/common';
import editor from './reducers/editor';
import home from './reducers/home';
import profile from './reducers/profile';
import settings from './reducers/auth';
import {combineReducers} from "settings";

export default combineReducers({
  article,
  articleList,
  auth,
  common,
  editor,
  home,
  profile,
  settings
});