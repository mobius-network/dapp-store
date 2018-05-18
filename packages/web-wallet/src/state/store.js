import store from './configureStore';
import getReducer from './reducer';

const updateReducer = () => store.replaceReducer(getReducer());

if (module.hot) {
  module.hot.accept('./reducer', updateReducer);
}

export default store;
