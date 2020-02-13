import React from 'react';
import logo from './img/logo.svg';
import './css/App.scss';
import Contact from './Contact';
import Project from './Project';
import Location from './Location';
import MainSlider from './MainSlider';
import Cards from './Cards';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.about = null
    this.project = null
    this.contact = null
    this.location = null
    this.handleAbout = this.handleAbout.bind(this);
    this.handleProject = this.handleProject.bind(this);
    this.handleContact = this.handleContact.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
  }

  state = {
    black: false,
    blue: false,
    upper: false,
    lower: false,
    logov: false,
    logot: false,
    mains: false,
    isLoading: true

  }

  changeStates() {
    setTimeout(() => {
      this.setState({black : true})
    }, 200);

    setTimeout(() => {
      this.setState({blue : true})
    }, 200); 

    setTimeout(() => {
      this.setState({upper : true})
    }, 1800); 

    setTimeout(() => {
      this.setState({lower : true})
    }, 2300); 

    setTimeout(() => {
      this.setState({logov : true})
    }, 3350); 

    setTimeout(() => {
      this.setState({logot : true})
      this.setState({isLoading : true})
    }, 4400); 

    setTimeout(() => {
      this.setState({mains : true})
    }, 4500); 
  }

  handleAbout(e) {
    e.preventDefault();
    this.about.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  handleProject(e) {
    e.preventDefault();
    this.project.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  handleContact(e) {
    e.preventDefault();
    this.contact.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  handleLocation(e) {
    e.preventDefault();
    this.location.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  componentDidMount() {
    this.changeStates()
    this.about = document.getElementById('about')
    this.project = document.getElementById('project')
    this.contact = document.getElementById('contact')
    this.location = document.getElementById('location')
  }

  render() {    
    let status = this.state;

    return (
    <div className={`wrapper main-wrapper ${status.isLoading ? "over" : ""}`}>
      <div className="App">
        <nav id="nav" className={`${status.mains ? "active" : ""}`}>
          <ul>
            <li><a href={'#' + this.about} onClick={this.handleAbout} className="tag">about</a></li>
            <li><a href={'#' + this.project} onClick={this.handleProject} className="tag">project</a></li>
            <li><a href={'#' + this.contact} onClick={this.handleContact} className="tag">contact</a></li>
            <li><a href={'#' + this.location} onClick={this.handleLocation} className="tag">company</a></li>
          </ul>
        </nav>

        <header className="App-header">         
          <div className={`logo-wrap ${status.logov ? "active" : ""}`} >
            <svg id="logoLayer" x="0px" y="0px" viewBox="0 0 450 160" src="false">
            <path className={`chain-black black ${status.black ? "active" : ""}`} d="M40.1,86.5l4.8-8.3H49c3.3,0,5.8-2.5,5.8-5.8V46.6c0-3.3-2.5-5.8-5.8-5.8H39c-3.3,0-5.8,2.5-5.8,5.8v11
              c-3.1,0.8-5.8,2.5-8.3,4.7V46.6c0.2-7.5,6.4-13.9,14.1-13.9h10c3.8,0,7.2,1.4,10,4.1c2.5,2.8,4.1,6.1,4.1,10v25.9
              c0,7.7-6.4,14.1-14.1,14.1l0,0L40.1,86.5z"/>
            <path className={`chain-blue blue ${status.blue ? "active" : ""}`} d="M39,120.8c-7.7,0-14.1-6.4-14.1-14.1V76.9c0-7.7,6.4-14.1,14.1-14.1h10.3l-4.4,8.3H39c-3.3,0-5.8,2.5-5.8,5.8
              v29.9c0,3.3,2.5,5.8,5.8,5.8h10c1.6,0,3-0.6,4.1-1.7c1.1-1.1,1.7-2.5,1.7-4.1V92c3.1-0.8,5.8-2.5,8.3-4.7v19.4
              c0,7.7-6.4,14.1-14.1,14.1C49,120.8,39,120.8,39,120.8z"/>
            <path className={`black upper ${status.upper ? "active" : ""}`} d="M108.4,39.1c-0.2,0.2-8.3,15.2-9.4,17.3l0,0c-1-2.1-9.2-17.2-9.4-17.3l0,0h-2.8V65h1.8v-0.2
              c0-0.2,0.2-20.1,0-24l9.6,17.3l0,0h1.8l9.6-17.3c0,3.7,0,23.8,0,24V65h1.8V39.1H108.4L108.4,39.1z"/>
            <path className={`black upper ${status.upper ? "active" : ""}`} d="M423.9,39.1L423.9,39.1c-0.2,0.2-8.4,15.2-9.4,17.5l0,0c-1-2.1-9.4-17.2-9.4-17.3l0,0h-2.8v25.9h1.8V65
              c0-0.2,0.2-20.1,0-24l9.6,17.3l0,0h1.8l9.6-17.3c0,3.7,0,23.8,0,24l0,0h1.8V39.1H423.9z"/>
            <polygon className={`black upper ${status.upper ? "active" : ""}`} points="159.9,39.1 158.1,39.1 158.1,65.1 174.8,65.1 174.8,63.3 159.9,63.3 "/>
            <rect x="187.5" y="39.1" className={`black upper ${status.upper ? "active" : ""}`} width="1.8" height="25.9"/>
            <polygon className={`black upper ${status.upper ? "active" : ""}`} points="377.7,65.1 395.2,65.1 395.2,63.4 379.7,63.4 379.7,52.4 394.9,52.4 394.9,51.1 379.7,51.1 379.7,40.6 
              395.2,40.6 395.2,39.1 377.7,39.1 "/>
            <polygon className={`black upper ${status.upper ? "active" : ""}`} points="234.3,65.1 251.7,65.1 251.7,63.4 236.1,63.4 236.1,52.4 251.3,52.4 251.3,51.1 236.1,51.1 236.1,40.6 
              251.7,40.6 251.7,39.1 234.3,39.1 "/>
            <path className={`black upper ${status.upper ? "active" : ""}`} d="M316.8,39.1c0,0.2-7.3,10.2-8.6,12.2l0,0c-1.3-1.9-8.4-12-8.6-12.2l0,0h-2.1l9.7,13.8v12.2h1.8V52.9l9.7-13.8
              L316.8,39.1L316.8,39.1z"/>
            <polygon className={`black upper ${status.upper ? "active" : ""}`} points="348.9,40.6 359.1,40.6 359.1,65.1 361.1,65.1 361.1,40.6 371.5,40.6 371.5,39.1 348.9,39.1 "/>
            <path className={`black upper ${status.upper ? "active" : ""}`} d="M221.1,62.5l-3.4-4.7l-13.9-18.6l0,0h-1.9v25.9h1.8V41.6l3.4,4.9L221,65.1l0,0h2.1v-26h-1.9L221.1,62.5z"/>
            <path className={`black upper ${status.upper ? "active" : ""}`} d="M284.1,51.6l-4.9-1.8H279c-2.3-0.8-5.3-1.9-5.3-5c0-2.8,2.9-4.7,7.3-4.7c3.7,0,6.2,1.5,7.6,2.6
              c0,0,0.5,0.5,1,1.1l0.2,0.3v-2.3v-0.2c-2.3-1.9-5.3-3.1-8.7-3.1c-5.3,0-9.2,2.6-9.2,6.3c0,4.1,4.2,5.5,6.6,6.3l4.9,1.8
              c2.9,1.1,5.8,2.1,5.8,5.5c0,3.2-3.2,5.3-8.3,5.3c-3.6,0-6.8-1.1-9.2-3.2l-0.2-0.2v2.1l0,0c2.6,1.8,5.7,2.8,9.4,2.8c6,0,10-2.8,10-7
              C291.1,54.5,287.7,52.9,284.1,51.6z"/>
            <path className={`black upper ${status.upper ? "active" : ""}`} d="M133.4,51.6l-4.9-1.8h-0.2c-2.3-0.8-5.3-1.9-5.3-5c0-2.8,2.9-4.7,7.3-4.7c3.7,0,6.2,1.5,7.6,2.6
              c0,0,0.5,0.5,1,1.1l0.2,0.3v-2.3v-0.2c-2.3-1.9-5.5-3.1-8.9-3.1c-5.3,0-9.2,2.6-9.2,6.3c0,4.1,4.2,5.5,6.6,6.3l4.9,1.8
              c2.9,1.1,5.8,2.1,5.8,5.5c0,3.2-3.2,5.3-8.3,5.3c-3.6,0-6.8-1.1-9.2-3.2l-0.2-0.2v2.1l0,0c2.6,1.8,5.7,2.8,9.4,2.8c6,0,10-2.8,10-7
              C140.2,54.5,136.8,52.9,133.4,51.6z"/>
            <path className={`black upper ${status.upper ? "active" : ""}`} d="M337,51.6l-4.9-1.8h-0.2c-2.3-0.8-5.3-1.9-5.3-5c0-2.8,2.9-4.7,7.3-4.7c3.7,0,6.2,1.5,7.6,2.6
              c0,0,0.5,0.5,1,1.1l0.2,0.3v-2.3v-0.2c-2.3-1.9-5.3-3.1-8.7-3.1c-5.3,0-9.2,2.6-9.2,6.3c0,4.1,4.2,5.5,6.6,6.3l4.9,1.8
              c2.9,1.1,5.8,2.1,5.8,5.5c0,3.2-3.2,5.3-8.3,5.3c-3.6,0-6.8-1.1-9.2-3.2l-0.2-0.2v2.1l0,0c2.6,1.8,5.7,2.8,9.4,2.8c6,0,10-2.8,10-7
              C344,54.5,340.6,52.9,337,51.6z"/>
            <path className={`blue lower ${status.lower ? "active" : ""}`} d="M122.7,84.8h5.7v25.3h16.2v5.2h-21.9V84.8z"/>
            <path className={`blue lower ${status.lower ? "active" : ""}`} d="M228.1,84.8h5.2v14.4h0.2l12-14.4h6.5l-12,13.8l14.4,16.7h-6l-11.7-13l-3.4,3.9v8.9h-5.2V84.8z"/>
            <path className={`blue lower ${status.lower ? "active" : ""}`} d="M306.1,84.8h5.3v12.8h15.2V84.8h5.3v30.6h-5.3v-12.8h-15.2v12.8h-5.3V84.8z"/>
            <path className={`blue lower ${status.lower ? "active" : ""}`} d="M361.8,104.1h-10l-4.1,11.3h-5.5l11.5-30.6h6.3l11.5,30.6h-5.8L361.8,104.1z M360.5,99.5l-3.6-9.4h-0.2
              l-3.4,9.4H360.5z"/>
            <path className={`blue lower ${status.lower ? "active" : ""}`} d="M381.9,84.8h5.5v30.6h-5.5V84.8z"/>
            <path className={`black lower ${status.lower ? "active" : ""}`} d="M177.4,87.1c-1.5-1.5-3.4-2.3-5.5-2.3h-7c-4.4,0-7.9,3.6-7.9,7.8v13.9l0.3-0.3c1.3-1.3,2.9-2.4,4.9-2.9h0.2
              V92.6c0-1.5,1.3-2.8,2.8-2.8h7c1.5,0,2.8,1.1,2.8,2.8v14.9c0,1.5-1.1,2.8-2.8,2.8h-7.3v5.2h7.3c4.4,0,7.8-3.6,7.8-7.8v-15
              C179.8,90.6,178.8,88.7,177.4,87.1z"/>
            <path className={`blue lower ${status.lower ? "active" : ""}`} d="M293.5,102.1c-1.3,1.3-2.9,2.4-4.9,2.9h-0.2v2.6c0,1.5-1.1,2.8-2.8,2.8h-7.1c-0.8,0-1.5-0.3-2.1-1
              c-0.2-0.2-0.3-0.3-0.3-0.5c-0.2-0.3-0.3-0.8-0.3-1.3V92.7c0-1,0.5-1.8,1.1-2.3c0.5-0.3,1-0.5,1.5-0.5h7.1c1.5,0,2.8,1.1,2.8,2.8v2.6
              h0.2c0.3-0.2,1.5-0.5,2.6-1.1s1.9-1.8,2.3-2.3l0,0l0,0c0-4.5-4.1-7-7.8-7h-7.1c-3.2,0-6,1.9-7.3,4.9c-0.5,1-0.6,1.9-0.6,3.1v14.9
              c0,2.8,1.5,5.3,3.9,6.8c1.3,0.8,2.6,1.1,4.1,1.1h7.1h0.2c4.2,0,7.8-3.6,7.8-7.8v-6.2v0.4H293.5z"/>
            <path className={`blue lower ${status.lower ? "active" : ""}`} d="M215.4,102.1c-1.3,1.3-2.9,2.4-4.9,2.9h-0.2v2.6c0,1.5-1.1,2.8-2.8,2.8h-7.1c-0.8,0-1.5-0.3-2.1-1
              c-0.2-0.2-0.3-0.3-0.3-0.5c-0.2-0.3-0.3-0.8-0.3-1.3V92.7c0-1,0.5-1.8,1.1-2.3c0.5-0.3,1-0.5,1.5-0.5h7.1c1.5,0,2.8,1.1,2.8,2.8v2.6
              h0.2c0.3-0.2,1.3-0.5,2.6-1.1c1.1-0.6,1.9-1.8,2.3-2.3l0,0l0,0c0-4.5-4.1-7-7.8-7h-7.1c-3.2,0-6,1.9-7.3,4.9c-0.5,1-0.6,1.9-0.6,3.1
              v14.9c0,2.8,1.5,5.3,3.9,6.8c1.3,0.8,2.6,1.1,4.1,1.1h7.1h0.2c4.2,0,7.8-3.6,7.8-7.8v-6.2v0.4H215.4z"/>
            <polygon className={`blue lower ${status.lower ? "active" : ""}`} points="422,84.8 422,84.8 422,108.4 406.1,84.8 400.1,84.8 400.1,115.4 405.3,115.4 405.3,91.8 421,115.4 
              427,115.4 427,84.8 "/>
            <path className={`blue lower ${status.lower ? "active" : ""}`} d="M103.9,99.1c0.5,0,5.2-0.6,5.2-7c0-3.6-3.2-7.3-7.5-7.3H86.9v30.6h15.9c4.4,0,7.9-3.9,7.9-8.6
              C110.8,100.8,105.5,99.1,103.9,99.1z M105,92.7c0,1.1-0.5,2.1-1.3,2.9s-1.8,1.3-2.9,1.3H92v-8.3h8.7C103.1,88.5,105,90.5,105,92.7z
              M105,110.2c-0.8,0.8-1.9,1.3-3.2,1.3H92v-9.4h9.7c2.6,0,4.7,2.1,4.7,4.7C106.5,108.3,105.8,109.4,105,110.2z"/>
          </svg>
          </div>

          <img src={logo} className={`logot ${status.logot ? "active" : ""}`} alt="logo" />

          <div className={`mains ${status.mains ? "active" : ""}`}>
            <MainSlider />
            <div className="main-back-sub">
            </div>        
           
          </div>
          
        </header>
      </div>
    
      <div className="App apps">

          <div id="about" className="App-header about">
             <Cards props={status.cards}/>
          </div>

      </div>      

      <Project />

      <Contact />

      <Location />

    </div>      
  );
  }
}

export default App;
