import Layout from './Layout/Layout'
import './App.css';
import { useEffect } from 'react';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;