import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Index from "./Pages/HomePage/Homepage"
import HomePage from './Pages/HomePage/Homepage';

import { CssBaseline } from "@mui/material";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <CssBaseline />
      <HomePage />
    </>
  </StrictMode>
);
