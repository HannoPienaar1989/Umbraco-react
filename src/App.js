
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
      <div className="logoright"><img src={logoright} alt="" style={{ width: 125, marginBottom: -10, marginLeft: 580 }} /></div>
      <ul className="nav">
        <li className="nav-item">
          <div className="text-block">
            <h1 className="h1-header">WELCOME</h1>
          </div>

          <div className="header-image-text-one">Your asset performance partner</div>
          <div className="header-image-text-two">from the Earth's surface down.</div>
          <img src={logoleft} alt="" style={{ width: 200, marginTop: 20 }} />
        </li>
        <li className="nav-item">
          <a className="nav-link">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">ABOUT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">MARKETS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">SERVICES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">PROJECTS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">CAREERS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">NEWS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">CONTACT US</a>
        </li>
      </ul>
      <header className="App-header">
      </header>
      <br></br>
      <br></br>
      <div className="paragraph">
        <em className="text">From electrical mechanical component overhauls for surface and underground equipment
        through to billion mine and port construction projects, G&S Engineering offer
        comprehensive services that encompass the project lifestyle from construction, throughmaintenance and optimization to final decommissioning and deconstruction.
      </em>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="row">
        <div className="column">
          <div className="top-left">SERVICES</div>
          <div className="top-left-middle">Calibre agrees to sell</div>
          <div className="top-left-middle-one"><div className="text-yellow">G&S Engineering to DRA</div></div>
          <div className="top-left-button"><button type="button" className="btn btn-warning centre">VIEW SERVICES</button></div>
          <img src={services} className="images" />
        </div>
        <div className="column">
          <div className="top-left-two">ABOUT US</div>
          <div className="top-left-two-middle"><div className="text-green">Get to know us</div></div>
          <div className="top-left-middle-two">a little better</div>
          <div className="top-left-two-button"><button type="button" className="btn btn-success centre">VIEW ABOUT US</button></div>
          <img src={aboutus} className="images" />
        </div>
        <div className="column">
          <div className="top-left-three">CAREERS</div>
          <div className="top-left-three-middle">Become one of the</div>
          <div className="top-left-middle-three"><div className="text-blue">team, join us</div></div>
          <div className="top-left-three-button"><button type="button" className="btn btn-primary centre button">VIEW CAREERS</button></div>
          <img src={careers} className="images" />
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="ourmarket">
        <br></br>
        <h2>OUR MARKETS</h2>
        <br></br>
        <br></br>
        <div className="row">
          <div className="column_ourmarkets">
          </div>
          <div className="column_ourmarkets">
            <img src={metalsminerals} className="images_our_markets" />
            <p>Metals & Minerals</p>
          </div>
          <div className="column_ourmarkets">
            <img src={infrastructure} className="images_our_markets" />
            <p>Infrastructure</p>
          </div>
          <div className="column_ourmarkets">
            <img src={industrial} className="images_our_markets" />
            <p>Industrial</p>
          </div>
          <div className="column_ourmarkets">
            <img src={energy} className="images_our_markets" />
            <p>Energy</p>
          </div>
          <div className="column_ourmarkets">
            <img src={water} className="images_our_markets" />
            <p>Water</p>
          </div>
        </div>
        <br></br>
        <br></br>
        <button type="button" className="btn btn-primary centre button">VIEW ALL MARKETS</button>
        <br></br>
        <br></br>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="bottominput centre">
        <h2>GET IN TOUCH</h2>
        <br></br>
        <div className="row">
          <div className="columntextfields">
            <img src={bottomimage} className="imagesbottom" />
          </div>
          <div className="columntextfields">
            <div className="form-group">
              <div className="row">
                <div className="columntextfields">
                  <h6>Complete the form to get in touch</h6>
                </div>
              </div>
              <div className="row">
                <div className="columntextfields">
                  <label htmlFor="Name">Name:</label>
                  <input type="text" id="Name" className="form-control form-group-input" placeholder="Name" aria-label="Name" />
                </div>
              </div>
              <div className="row">
                <div className="columntextfields">
                  <label htmlFor="EmailAddress">Email address:</label>
                  <input type="text" id="EmailAddress" className="form-control form-group-input" placeholder="Email Address" aria-label="Name" />
                </div>
              </div>
              <div className="row">
                <div className="columntextfields">
                  <label htmlFor="PhoneNumber">Phone Number:</label>
                  <input type="text" id="PhoneNumber" className="form-control form-group-input" placeholder="Phone Number" aria-label="Name" />
                </div>
              </div>
              <div className="row">
                <div className="columntextfields">
                  <label htmlFor="StartDate" className="form-group-right">Start Date:</label>
                  <input type="date" id="StartDate" placeholder=" " className="form-control form-group-right" />
                </div>
                <div className="columntextfields">
                  <label htmlFor="EndDate" className="form-group-right">End Date:</label>
                  <input type="date" id="EndDate" placeholder=" " className="form-control form-group-right" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <div className="columntextfields"></div>
                <div className="columntextfields">
                  <button type="button" className="btn btn-primary buttonSubmit">SUBMIT</button>
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
      <div className="footer-banner">
        <ul className="nav">
          <li className="nav-item">
            <img src={gslogo} alt="" style={{ width: 70, marginTop: 20 }} />
          </li>
          <li className="nav-item">
            <a className="nav-link"></a>
          </li>
          <li className="nav-item">
            <a className="nav-link"></a>
          </li>
          {
            ["HOME", "ABOUT", "MARKETS", "SERVICES", "PROJECTS", "CAREERS", "NEWS", "CONTACT US"].map((x, ind) => (
              <li className="nav-item">
                <a key={ind} className="nav-link footer-text">{x}</a>
              </li>
            ))
          }
          <li className="nav-item">
          </li>
          <li className="nav-item">
          </li>
          <li className="nav-item">
            <a className="nav-link footer-text">      </a>
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
