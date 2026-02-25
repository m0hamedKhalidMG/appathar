import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './i18n';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import GlobalStyle from './GlobalStyle';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ArchaeologicalPlacesPage from './components/ArchaeologicalPlacesPage ';
import AboutAthar from './components/AboutAthar';
import Contact from './components/Contact';
function App() {
  // Define the handleLogin function
  const handleLogin = (role) => {
    if (role === 'admin') {
      console.log('Logged in as Admin');
      // Redirect to admin page
    } else {
      console.log('Logged in as User');
      // Redirect to user home page or dashboard
    }
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/acplaces" element={<ArchaeologicalPlacesPage />} />
        {/* Pass the handleLogin function to the Login component */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />



       


        
        <Route path="/about" element={<AboutAthar />} />
        <Route path="/contact" element={<Contact />} />{' '}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
