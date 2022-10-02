import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CreateEvent from './CreateEvent';
import Event from './Event';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous"/>
  //   <App />
  // </React.StrictMode>

  <BrowserRouter>
  <React.StrictMode>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="create_event" element={<CreateEvent />} /> 
      <Route path="event" element={<Event />} />
    </Routes>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
