import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import MyNotes from './screens/MyNotes/MyNotes';
import RegisterPage from './screens/RegisterPage/RegisterPage';
import LoginPage from './screens/LoginPage/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      
      <Routes>
     
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<LoginPage/>}/> 
        <Route path='/register' element={<RegisterPage/>}/>   
        <Route path='/mynotes' element={<MyNotes/>}/>   
      
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
