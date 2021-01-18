
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
      <br></br>
      <br></br>

      <Paragrapgh />

      <br></br>
      <br></br>
      <br></br>

      <Info/>

      <br></br>
      <br></br>
      <br></br>

      <Market/>

      <br></br>
      <br></br>
      <br></br>

      <Contact/>

      <br></br>
      <br></br>
      <br></br>
      <h1>DISPLAY YOUR DATABASE ENTRIES HERE MOSES AND GODFREY</h1>
      <br></br>
      <br></br>
      <br></br>

      <Footer/>
    </div>
  );
}
export default App;
