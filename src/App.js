
import './App.css';

import { RouterProvider } from 'react-router-dom';
import { router } from './components/routes/Router';

function App() {
  return (
    <div className="App bg-gradient-to-r from-black to-white min-h-screen">
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
