import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './assets/global.css';

// function App() {
//     return <h1>Hello, First React Web!</h1>;
// }
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
