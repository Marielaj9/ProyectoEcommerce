
import './App.css';
import Home from './components/Home';
import NavHeaders from './layouts/NavHeaders';
import Perfil from './pages/Perfil';

function App() {
  return (
    <div className="App">
      <Home />
      <NavHeaders />
      <Perfil />
    </div>
  );
}

export default App;
