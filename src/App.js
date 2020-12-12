import 'assets/tailwind.output.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import RouterManager from 'router';
import store from 'store';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouterManager />
      </BrowserRouter>
    </Provider>
  );
}
