import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Routing from './routing';
import './index.css';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-yoga-200 selection:text-yoga-900 text-left flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routing />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
