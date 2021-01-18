
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoleft from './assets/fullgslogo.png';
import logoright from './assets/dra-logo.png';
import services from './assets/Group 232.jpg';
import aboutus from './assets/Group 233.jpg';
import careers from './assets/Group 234.jpg';
import metalsminerals from './assets/metals-minerals.png';
import infrastructure from './assets/infrastructure.png';
import industrial from './assets/infrastructure.png';
import energy from './assets/energy.png';
import water from './assets/water.png';  
import bottomimage from './assets/bottom-image.jpg';  
import gslogo from './assets/g-s logo compact.png';
import facebook from './assets/facebook.png';
import linked from './assets/linkedin.png';
import youtube from './assets/youtube.png';
import twitter from './assets/twitter.png';

function App() {
  return (
    <div className="App">
     <div class="logoright"><img src={logoright} alt style={{width:125, marginBottom: -10, marginLeft: 580}} /></div>
      <ul class="nav">
      <li class="nav-item">
      <div class="text-block">
    <h1 class="h1-header">WELCOME</h1>
      </div>

      <div class="header-image-text-one">Your asset performance partner</div>
      <div class="header-image-text-two">from the Earth's surface down.</div>
      <img src={logoleft} alt style={{width:200, marginTop: 20}} />
      </li>
      <li class="nav-item">
      <a class="nav-link">HOME</a>
      </li>
      <li class="nav-item">
      <a class="nav-link">ABOUT</a>
      </li>
      <li class="nav-item">
      <a class="nav-link">MARKETS</a>
      </li>
      <li class="nav-item">
      <a class="nav-link">SERVICES</a>
      </li>
      <li class="nav-item">
      <a class="nav-link">PROJECTS</a>
      </li>
      <li class="nav-item">
      <a class="nav-link">CAREERS</a>
      </li>
      <li class="nav-item">
      <a class="nav-link">NEWS</a>
      </li>
      <li class="nav-item">
      <a class="nav-link">CONTACT US</a>
      </li>
      </ul>
      <header className="App-header">
      </header>
      <br></br>
      <br></br>
      <div class="paragraph">
      <em class="text">From electrical mechanical component overhauls for surface and underground equipment
        through to billion mine and port construction projects, G&S Engineering offer
        comprehensive services that encompass the project lifestyle from construction, throughmaintenance and optimization to final decommissioning and deconstruction.
      </em>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div class="row">
      <div class="column">
      <div class="top-left">SERVICES</div>
      <div class="top-left-middle">Calibre agrees to sell</div>
      <div class="top-left-middle-one"><div class="text-yellow">G&S Engineering to DRA</div></div>
      <div class="top-left-button"><button type="button" class="btn btn-warning centre">VIEW SERVICES</button></div>
      <img src={services} class="images" />
      </div>
      <div class="column">
      <div class="top-left-two">ABOUT US</div>
      <div class="top-left-two-middle"><div class="text-green">Get to know us</div></div>
      <div class="top-left-middle-two">a little better</div>
      <div class="top-left-two-button"><button type="button" class="btn btn-success centre">VIEW ABOUT US</button></div>
      <img src={aboutus} class="images" />
      </div>
      <div class="column">
      <div class="top-left-three">CAREERS</div>
      <div class="top-left-three-middle">Become one of the</div>
      <div class="top-left-middle-three"><div class="text-blue">team, join us</div></div>
      <div class="top-left-three-button"><button type="button" class="btn btn-primary centre button">VIEW CAREERS</button></div>
      <img src={careers} class="images" />
      </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div class="ourmarket">
      <br></br>
      <h2>OUR MARKETS</h2>
      <br></br>
      <br></br>
      <div class="row">
      <div class="column_ourmarkets">
      </div>
      <div class="column_ourmarkets">
      <img src={metalsminerals} class="images_our_markets" />
      <p>Metals & Minerals</p>
      </div>
      <div class="column_ourmarkets">
      <img src={infrastructure} class="images_our_markets" />
      <p>Infrastructure</p>
      </div>
      <div class="column_ourmarkets">
      <img src={industrial} class="images_our_markets" />
      <p>Industrial</p>
      </div>
      <div class="column_ourmarkets">
      <img src={energy} class="images_our_markets" />
      <p>Energy</p>
      </div>
      <div class="column_ourmarkets">
      <img src={water} class="images_our_markets" />
      <p>Water</p>
      </div>
      </div>
      <br></br>
      <br></br>
      <button type="button" class="btn btn-primary centre button">VIEW ALL MARKETS</button>
      <br></br>
      <br></br>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div class="bottominput centre">
      <h2>GET IN TOUCH</h2>
      <br></br> 
        <div class="row">
        <div class="columntextfields">
      <img src={bottomimage} class="imagesbottom" />
      </div>
      <div class="columntextfields"> 
      <div className="form-group">
      <div class="row">
      <div class="columntextfields">
      <h6>Complete the form to get in touch</h6>
      </div>
      </div>
      <div class="row">
      <div class="columntextfields">
      <label htmlFor="Name">Name:</label>
      <input type="text" id="Name" className="form-control form-group-input" placeholder="Name" aria-label="Name" />
      </div>
        </div>
      <div class="row">
      <div class="columntextfields">
      <label htmlFor="EmailAddress">Email address:</label>
      <input type="text" id="EmailAddress" className="form-control form-group-input" placeholder="Email Address" aria-label="Name" />
      </div>
        </div>
      <div class="row">
      <div class="columntextfields">
      <label htmlFor="PhoneNumber">Phone Number:</label>
      <input type="text" id="PhoneNumber" className="form-control form-group-input" placeholder="Phone Number" aria-label="Name" />
      </div>
        </div>
        <div class="row">
      <div class="columntextfields">
      <label htmlFor="StartDate" class="form-group-right">Start Date:</label>
      <input type="date" id="StartDate" placeholder=" " className="form-control form-group-right" />
      </div>
      <div class="columntextfields">
      <label htmlFor="EndDate" class="form-group-right">End Date:</label>
      <input type="date" id="EndDate" placeholder=" " className="form-control form-group-right" />
      </div>
        </div>
      </div>
      <div className="form-group">
      <div class="row">
      <div class="columntextfields"></div>
      <div class="columntextfields">
      <button type="button" class="btn btn-primary buttonSubmit">SUBMIT</button>
      </div>
        </div>
      </div>
      </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <h1>DISPLAY YOUR DATABASE ENTRIES HERE MOSES AND GODFREY</h1>
      <br></br>
      <br></br>
      <br></br>
      <div class="footer-banner">
      <ul class="nav">
      <li class="nav-item">
      <img src={gslogo} alt style={{width:70, marginTop: 20}} />
      </li>
      <li class="nav-item">
      <a class="nav-link"></a>
      </li>
      <li class="nav-item">
      <a class="nav-link"></a>
      </li>
      <li class="nav-item">
      <a class="nav-link footer-text">HOME</a>
      </li>
      <li class="nav-item">
      <a class="nav-link footer-text">ABOUT</a>
      </li>
      <li class="nav-item">
      <a class="nav-link footer-text">MARKETS</a>
      </li>
      <li class="nav-item">
      <a class="nav-link footer-text">SERVICES</a>
      </li>
      <li class="nav-item">
      <a class="nav-link footer-text">PROJECTS</a>
      </li>
      <li class="nav-item">
      <a class="nav-link footer-text">CAREERS</a>
      </li>
      <li class="nav-item">
      <a class="nav-link footer-text">NEWS</a>
      </li>
      <li class="nav-item">
      <a class="nav-link footer-text">CONTACT US</a>
      </li>
      <li class="nav-item">
      </li>
      <li class="nav-item">
      </li>
      <li class="nav-item">
      <a class="nav-link footer-text">      </a>
      </li>
      <li class="nav-item">
      <img src={facebook} alt class="footer-icons"/>
      </li>
      <li class="nav-item">
      <img src={linked} alt class="footer-icons"/>
      </li>
      <li class="nav-item">
      <img src={youtube} alt class="footer-icons"/>
      </li>
      <li class="nav-item">
      <img src={twitter} alt class="footer-icons"/>
      </li>
      </ul>
      </div>
    </div>
  );
}
export default App;
