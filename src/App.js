import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';

import Error from './views/Error';
import Index from './views/Main';

function App() {

  return (
    <BrowserRouter>
      <main className="App">
        <Routes>
          <Route path='*' element={<Error />} />
          <Route path='/' element={<Index />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
