
import Nav from './components/Nav'
import Footer from './components/Footer'
import Contact from './components/Contacts';
import Market from './components/Market';
import Info from './components/Info'
import Paragrapgh from './components/Pargrapgh';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <header className="App-header">
      </header>
      <Paragrapgh />
      <Info/>
      <Market/>
      <Contact/>
      <h1>DISPLAY YOUR DATABASE ENTRIES HERE MOSES AND GODFREY</h1>
      <Footer/>
    </div>
  );
}
export default App;
