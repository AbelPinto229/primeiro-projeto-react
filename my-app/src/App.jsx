
import { Routes, Route } from 'react-router-dom';

import MainLayout from './components/MainLayout';
import Dashboard from './components/Dashboard';
import About from './components/About';
import AboutHome from './components/AboutHome';
import Settings from './components/Settings';
import Produto from './components/produto';
import LazyAbout from './components/LazyAbout';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />

        <Route path="/about" element={<About />}>
          <Route index element={<AboutHome />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="/lazy" element={<LazyAbout />} />
        <Route path="/produto/:id" element={<Produto />} />
      </Route>
    </Routes>
  );
}

export default App;

