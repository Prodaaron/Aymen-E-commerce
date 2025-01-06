import './App.css'
import Header from './components/header/header.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const About = () => <div><h1>About Page</h1><p>Welcome to the About page!</p></div>;
const Contact = () => <div><h1>Contact Page</h1><p>Get in touch with us!</p></div>;

function App() {

  return (
    <>
      <Router>
        <Header /> {/* Use the Header component here */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
