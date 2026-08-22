import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import PageContainer from './components/layout/PageContainer';

// Placeholder components for other routes
const Placeholder = ({ title }) => (
  <PageContainer className="py-32 min-h-[60vh] flex items-center justify-center">
    <h1 className="heading-hero">{title}</h1>
  </PageContainer>
);

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-deep-forest bg-soft-cream">
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:id" element={<Placeholder title="Destination Detail" />} />
          <Route path="/collections" element={<Placeholder title="Collections" />} />
          <Route path="/collections/:id" element={<Placeholder title="Collection Detail" />} />
          <Route path="/stories" element={<Placeholder title="Stories" />} />
          <Route path="/stories/:id" element={<Placeholder title="Story Detail" />} />
          <Route path="/signup" element={<Placeholder title="Sign Up" />} />
          <Route path="/login" element={<Placeholder title="Log In" />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
