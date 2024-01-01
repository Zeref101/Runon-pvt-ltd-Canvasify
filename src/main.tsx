import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Draggable from 'react-draggable';
import './index.css'
import { ThemeProvider } from './context/ThemeProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Draggable>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Draggable>
  </React.StrictMode>,
)
