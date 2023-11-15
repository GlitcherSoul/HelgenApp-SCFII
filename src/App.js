import logo from './logo.jpg';
import './App.css';
import SocialMedia from './Components/SocialMedia.js';
import Startbtn from './Components/Startbtn';
//import UseModal from './Components/UseModal';

function App() {
  return (
    <div className="App">
      <div className='info-btn'>
        <a href='https://github.com/GlitcherSoul/HelgenDocumentation'>
          <Startbtn>More</Startbtn>
        </a>
      </div>
      <div className="App-header">
        <a href='https://www.helgen.tech'>
          <img src={logo} className="App-logo" alt="logo"/>
        </a>
        <p/>
        <div>
          <SocialMedia/>  
          <p/>
          <a href='http://107.22.74.201:3000/d/d191e021-ff40-48ee-8795-2e16cffc2c07/helge-dashboard?orgId=1'>
            <Startbtn>
              START
            </Startbtn>
          </a>
          <p/>
        </div>
      </div>
    </div>
  );
}

export default App;
