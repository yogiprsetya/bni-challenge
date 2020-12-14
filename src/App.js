import 'assets/tailwind.output.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import setAuthToken from 'utils/setAuthToken';
import { read } from 'utils/api';
import { setCurrentUser } from 'store/actions/logginUser'
import RouterManager from 'router';
import store from 'store';

const token = localStorage.getItem('@shipme:token');

if (token) {
  setAuthToken(token);
  store.dispatch(setCurrentUser({isAuthenticated: !!token}));

  (async () => {
    const me = await read('me');
    store.dispatch(setCurrentUser(me.data));
  })();
}

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouterManager />
      </BrowserRouter>
    </Provider>
  );
}
