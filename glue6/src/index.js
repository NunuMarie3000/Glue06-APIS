import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './routes/about';
import Home from './routes/home';
import Withcomponentdidmount from './routes/withcomponentdidmount'
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='about' element={<About/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='withcomponentdidmount' element={<Withcomponentdidmount/>}/>
          <Route path='*' element={<h1 style={{backgroundColor: 'red', color: 'white', padding: '1rem'}}>That's the end of the line, head back now!</h1>}/>
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
