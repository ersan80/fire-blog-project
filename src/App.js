
import { ToastContainer } from 'react-toastify';
import AppRouter from './app-router/AppRouter';
import './App.css';
import Navbar from './components/Navbar';
import AuthContextProvider from './context/AuthContext';
import BlogContextProvider from './context/BlogContext';

function App() {
  return (
    <div>
     
      <AuthContextProvider> 
        <BlogContextProvider>
      <AppRouter></AppRouter>
      </BlogContextProvider>
     </AuthContextProvider>
     <ToastContainer></ToastContainer>
     
    </div>
  );
}

export default App;
