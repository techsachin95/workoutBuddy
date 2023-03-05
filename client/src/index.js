import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Context from './Context/Context';
import  AuthContext  from './Context/AuthContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContext>
        <Context><App/></Context>
    </AuthContext>
);   

