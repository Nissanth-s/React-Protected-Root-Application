import { RouterProvider } from 'react-router-dom'
import './App.css';
import router from './Router';
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
