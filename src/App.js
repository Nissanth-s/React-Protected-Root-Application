import { RouterProvider } from 'react-router-dom'
import './App.css';
import router from './Router';
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
