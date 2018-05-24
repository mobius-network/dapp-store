import store from './configureStore';
import getReducer from './reducer';
import rootSaga from './saga';

const updateReducer = () => store.replaceReducer(getReducer());

store.runSaga(rootSaga);

if (module.hot) {
  module.hot.accept('./reducer', updateReducer);
}

export { persistor } from './configureStore';

export default store;
