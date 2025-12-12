import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const pageTitles: Record<string, string> = {
      home: 'Horizon Property Investors - Sell Your Home Fast & As-Is',
      'how-it-works': 'How It Works - Horizon Property Investors',
      about: 'About Us - Horizon Property Investors',
      contact: 'Contact - Horizon Property Investors',
    };

    document.title = pageTitles[currentPage] || 'Horizon Property Investors';
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'how-it-works':
        return <HowItWorks onNavigate={setCurrentPage} />;
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
