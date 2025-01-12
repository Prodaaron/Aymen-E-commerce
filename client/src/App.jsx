import './App.css'
import Header from './components/header/header.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import Footer from './components/footer/footer.jsx';
import FixedAnnouncement from './components/fixed-announcement/fixedAnnouncement.jsx';
import TermsAndConditions from './pages/termsAndConditions.jsx';
import PrivacyPolicy from './pages/privacyPolicy.jsx';

function App() {

  return (
    <>

      <FixedAnnouncement /> {/* Use the FixedAnnouncement component here */}
      <Router>
        <Header /> {/* Use the Header component here */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        </Routes>
      </Router>

      <Footer /> 
    </>

    
  )
}

export default App
