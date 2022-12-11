
import './App.css';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { router } from './components/routes/Router';
import { Toaster } from 'react-hot-toast';


function App() {
  return (


      <div className="App bg-gradient-to-r from-black to-white min-h-screen">
        <RouterProvider router={router}>
        </RouterProvider>

        <Toaster></Toaster>
      </div>


   
  );
}

export default App;
