import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { AxiosInterceptor } from 'components/AxiosInterceptor/AxiosInterceptor';

ReactDOM.createRoot(document.getElementById('root')).render(
  //   <React.StrictMode>
  <BrowserRouter basename="/beauty-salon-frontend">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AxiosInterceptor>
          <App />
        </AxiosInterceptor>
      </PersistGate>
    </Provider>
  </BrowserRouter>
  //   </React.StrictMode>
);
