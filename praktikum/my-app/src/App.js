
import '../src/index.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterJs from './components/Pages/Router';

function App() {
  return (
    <> 
    <React.Fragment>
      <BrowserRouter>
        <RouterJs/>
      </BrowserRouter>
      </React.Fragment>
    </>
  );
}

export default App;
