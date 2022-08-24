import React, { ReactNode } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routers } from './router/routers';

const App:React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {
          routers.map(item => {
            return (
              <Route path={item.path} key={item.key} element={item.element as unknown as ReactNode}/>
            )
          })
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
