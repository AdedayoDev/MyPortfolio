/**
 * @copyright 2025 johnadedayo
 * @license Apache-2.0
 */

/**
 * Node modules
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App.tsx';
import Sidebar from './components/Sidebar.tsx';
import FloatingMenu from './components/FloatingMenu.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='min-h-screen bg-neutral-900'>
      <FloatingMenu />
      <Sidebar />
      <App />
    </div>
  </StrictMode>,
);
