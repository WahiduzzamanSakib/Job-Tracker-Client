import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Jobadd from './components/Jobadd';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/"
            element={<Hero />} />
          <Route path="/jobs-add"
            element={<Jobadd />}
          />
          <Route path="/dashboard"
            element={<Dashboard />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;