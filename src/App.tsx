import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import { Toaster } from '@/components/ui/sonner';
import './App.css';
import { Xodimlar } from './pages/Xodimlar';
import Gallery from './pages/galery/galerya';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/xizmatlar" element={<Services />} />
          <Route path="/biz-haqimizda" element={<About />} />
          <Route path="/staff" element={<Xodimlar />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/aloqa" element={<Contact />} />
        </Routes>
      </Layout>
      <Toaster />
    </Router>
  );
}

export default App;