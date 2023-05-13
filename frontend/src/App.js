import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyNotes from './screens/MyNotes/MyNotes';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';

const App = () => (
    <BrowserRouter>
    <Header></Header>
    <main style = {{minHeight:"93vh"}} >
    <Routes> 
    <Route path='/' Component={LandingPage}/>
    <Route path='/mynotes' Component={MyNotes}/> 
    <Route path='/register' Component={RegisterScreen}/> 
    <Route path='/login' Component={LoginScreen}/> 
    </Routes>
    </main>
    <Footer></Footer> 
    </BrowserRouter>
  );


export default App;
 