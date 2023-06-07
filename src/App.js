import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Portfolio from './Pages/Portfolio/Portfolio';
import OurClients from './Pages/OurClients/OurClients';
import Team from './Pages/Team/Team';
import Gallery from './Pages/Gallery/Gallery';
import GetInvolved from './Pages/GetInvolved/GetInvolved';
import Contact from './Pages/Contact/Contact';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Partner from './Pages/Partner/Partner';
import Jobs from './Pages/Jobs/Jobs';
import ETender from './Pages/E-Tender/ETender';
import PortfolioDetails from './Pages/Portfolio/PortfolioDetails';
import SocialIconBar from './Components/SocialIconBar/SocialIconBar';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <SocialIconBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/portfolio/:id' element={<PortfolioDetails/>} />
        <Route path='/client' element={<OurClients/>} />
        <Route path='/team' element={<Team/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/getinvolved' element={<GetInvolved/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/getinvolved/partner' element={<Partner/>} />
        <Route path='/getinvolved/jobs' element={<Jobs/>} />
        <Route path='/getinvolved/e-tender' element={<ETender/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
