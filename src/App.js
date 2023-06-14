import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

// Hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './Hooks/useAuthentication';

// Context
import { AuthProvider } from './context/authContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login'
import Cadastro from './pages/Cadastro/Cadastro'
import CreatePost from './pages/CreatePost/CreatePost';
import Dashboard from './pages/Dashboard/Dashboard';
import Loading from './pages/Loading/Loading';
import NotFound from './pages/NotFound/NotFound';

function App() {
  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user === undefined

  useEffect(()=> {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if(loadingUser){
    return <Loading/>
  }
  
  return (
    <div className="App">
      <AuthProvider value={{user}}>
        <BrowserRouter>
          <Navbar/>
          <div className="container">
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/singin' element={!user ? <Login/> : <Navigate to={'/'}/>} />
              <Route path='/singup' element={!user ? <Cadastro/> : <Navigate to={'/'} />} />
              <Route path='/posts/create' element={user ? <CreatePost/> : <Navigate to={'/singin'}/>} />
              <Route path='/dashboard' element={user ? <Dashboard/> : <Navigate to={'/singin'}/>} />
              <Route path='*' element={<NotFound/>} />
            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
