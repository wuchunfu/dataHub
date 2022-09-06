import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Spin } from 'antd';
import ErrorBoundary from '@components/ErrorBoundary';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.min.css';
import "lib-flexible";
import './index.css';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Suspense fallback={<Spin tip='loading...'/>}>
        <App />
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
