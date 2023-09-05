import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkoutContextprovoder } from './context/WorkoutContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WorkoutContextprovoder>
        <App />
    </WorkoutContextprovoder>
    
  </React.StrictMode>
);

