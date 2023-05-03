import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Home from './Home';
import About from './About';
import Rooms from './Rooms';
import Footer from './Footer';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Home />
    <About />
    <Rooms />
    <Footer />
  </StrictMode>
);
