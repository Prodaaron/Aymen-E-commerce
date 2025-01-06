import './App.css'
import Header from './components/header/header.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import Footer from './components/footer/footer.jsx';

function App() {

  return (
    <>
      <Router>
        <Header /> {/* Use the Header component here */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

      <Footer /> 
    </>

    
  )
}

export default App
