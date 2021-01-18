
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
      <div ClassName="logoright"><img src={logoright} alt=" " style={{ width: 125, marginBottom: -10, marginLeft: 580 }} /></div>
      <ul ClassName="nav">
        <li ClassName="nav-item">
          <div ClassName="text-block">
            <h1 ClassName="h1-header">WELCOME</h1>
          </div>

          <div ClassName="header-image-text-one">Your asset performance partner</div>
          <div ClassName="header-image-text-two">from the Earth's surface down.</div>
          <img src={logoleft} alt=" " style={{ width: 200, marginTop: 20 }} />
        </li>
        <li ClassName="nav-item">
          <a ClassName="nav-link">HOME</a>
        </li>
        <li ClassName="nav-item">
          <a ClassName="nav-link">ABOUT</a>
        </li>
        <li ClassName="nav-item">
          <a ClassName="nav-link">MARKETS</a>
        </li>
        <li ClassName="nav-item">
          <a ClassName="nav-link">SERVICES</a>
        </li>
        <li ClassName="nav-item">
          <a ClassName="nav-link">PROJECTS</a>
        </li>
        <li ClassName="nav-item">
          <a ClassName="nav-link">CAREERS</a>
        </li>
        <li ClassName="nav-item">
          <a ClassName="nav-link">NEWS</a>
        </li>
        <li ClassName="nav-item">
          <a ClassName="nav-link">CONTACT US</a>
        </li>
      </ul>
      <header className="App-header">
      </header>
      <br></br>
      <br></br>
      <div ClassName="paragraph">
        <em ClassName="text">From electrical mechanical component overhauls for surface and underground equipment
        through to billion mine and port construction projects, G&S Engineering offer
        comprehensive services that encompass the project lifestyle from construction, throughmaintenance and optimization to final decommissioning and deconstruction.
      </em>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div ClassName="row">
        <div ClassName="column">
          <div ClassName="top-left">SERVICES</div>
          <div ClassName="top-left-middle">Calibre agrees to sell</div>
          <div ClassName="top-left-middle-one"><div ClassName="text-yellow">G&S Engineering to DRA</div></div>
          <div ClassName="top-left-button"><button type="button" ClassName="btn btn-warning centre">VIEW SERVICES</button></div>
          <img src={services} ClassName="images" />
        </div>
        <div ClassName="column">
          <div ClassName="top-left-two">ABOUT US</div>
          <div ClassName="top-left-two-middle"><div ClassName="text-green">Get to know us</div></div>
          <div ClassName="top-left-middle-two">a little better</div>
          <div ClassName="top-left-two-button"><button type="button" ClassName="btn btn-success centre">VIEW ABOUT US</button></div>
          <img src={aboutus} ClassName="images" />
        </div>
        <div ClassName="column">
          <div ClassName="top-left-three">CAREERS</div>
          <div ClassName="top-left-three-middle">Become one of the</div>
          <div ClassName="top-left-middle-three"><div ClassName="text-blue">team, join us</div></div>
          <div ClassName="top-left-three-button"><button type="button" ClassName="btn btn-primary centre button">VIEW CAREERS</button></div>
          <img src={careers} ClassName="images" />
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div ClassName="ourmarket">
        <br></br>
        <h2>OUR MARKETS</h2>
        <br></br>
        <br></br>
        <div ClassName="row">
          <div ClassName="column_ourmarkets">
          </div>
          <div ClassName="column_ourmarkets">
            <img src={metalsminerals} ClassName="images_our_markets" />
            <p>Metals & Minerals</p>
          </div>
          <div ClassName="column_ourmarkets">
            <img src={infrastructure} ClassName="images_our_markets" />
            <p>Infrastructure</p>
          </div>
          <div ClassName="column_ourmarkets">
            <img src={industrial} ClassName="images_our_markets" />
            <p>Industrial</p>
          </div>
          <div ClassName="column_ourmarkets">
            <img src={energy} ClassName="images_our_markets" />
            <p>Energy</p>
          </div>
          <div ClassName="column_ourmarkets">
            <img src={water} ClassName="images_our_markets" />
            <p>Water</p>
          </div>
        </div>
        <br></br>
        <br></br>
        <button type="button" ClassName="btn btn-primary centre button">VIEW ALL MARKETS</button>
        <br></br>
        <br></br>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div ClassName="bottominput centre">
        <h2>GET IN TOUCH</h2>
        <br></br>
        <div ClassName="row">
          <div ClassName="columntextfields">
            <img src={bottomimage} ClassName="imagesbottom" />
          </div>
          <div ClassName="columntextfields">
            <div className="form-group">
              <div ClassName="row">
                <div ClassName="columntextfields">
                  <h6>Complete the form to get in touch</h6>
                </div>
              </div>
              <div ClassName="row">
                <div ClassName="columntextfields">
                  <label htmlFor="Name">Name:</label>
                  <input type="text" id="Name" className="form-control form-group-input" placeholder="Name" aria-label="Name" />
                </div>
              </div>
              <div ClassName="row">
                <div ClassName="columntextfields">
                  <label htmlFor="EmailAddress">Email address:</label>
                  <input type="text" id="EmailAddress" className="form-control form-group-input" placeholder="Email Address" aria-label="Name" />
                </div>
              </div>
              <div ClassName="row">
                <div ClassName="columntextfields">
                  <label htmlFor="PhoneNumber">Phone Number:</label>
                  <input type="text" id="PhoneNumber" className="form-control form-group-input" placeholder="Phone Number" aria-label="Name" />
                </div>
              </div>
              <div ClassName="row">
                <div ClassName="columntextfields">
                  <label htmlFor="StartDate" ClassName="form-group-right">Start Date:</label>
                  <input type="date" id="StartDate" placeholder=" " className="form-control form-group-right" />
                </div>
                <div ClassName="columntextfields">
                  <label htmlFor="EndDate" ClassName="form-group-right">End Date:</label>
                  <input type="date" id="EndDate" placeholder=" " className="form-control form-group-right" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div ClassName="row">
                <div ClassName="columntextfields"></div>
                <div ClassName="columntextfields">
                  <button type="button" ClassName="btn btn-primary buttonSubmit">SUBMIT</button>
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
      <div ClassName="footer-banner">
        <ul ClassName="nav">
          <li ClassName="nav-item">
            <img src={gslogo} alt=" " style={{ width: 70, marginTop: 20 }} />
          </li>
          <li ClassName="nav-item">
            <a ClassName="nav-link"></a>
          </li>
          <li ClassName="nav-item">
            <a ClassName="nav-link"></a>
          </li>
          {
            ["HOME", "ABOUT", "MARKETS", "SERVICES", "PROJECTS", "CAREERS", "NEWS", "CONTACT US"].map((x, ind) => (
              <li className="nav-item">
                <a key={ind} className="nav-link footer-text">{x}</a>
              </li>
            ))
          }
          <li ClassName="nav-item">
          </li>
          <li ClassName="nav-item">
          </li>
          <li ClassName="nav-item">
            <a ClassName="nav-link footer-text">      </a>
          </li>
          {
            [facebook, linked, youtube, twitter].map((x, ind) => (
              <li className="nav-item">
                <img src={x} key={ind} alt={ind} className="footer-icons" />
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}
export default App;
