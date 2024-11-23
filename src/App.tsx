import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Service from './pages/service/Service';
import Form from './pages/form/form';
import { Header } from './components/header';
import { Footer } from './components/footer/footer';
import './global.css'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:id" element={<Service />} />
        <Route path="/form" element={<Form />} />
      </Routes>/
      <Footer/>
    </BrowserRouter>
  );
}
export default App
