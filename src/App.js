import React from "react";
import logo from "./img/logo.svg";
import symbol from "./img/symbol.svg";
import "./css/App.scss";
import Contact from "./Contact";
import Project from "./Project";
import Location from "./Location";
import MainSlider from "./MainSlider";
import Cards from "./Cards";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.about = null;
    this.project = null;
    this.contact = null;
    this.location = null;
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
    isLoading: true,
  };

  changeStates() {
    setTimeout(() => {
      this.setState({ black: true });
    }, 200);

    setTimeout(() => {
      this.setState({ blue: true });
    }, 200);

    setTimeout(() => {
      this.setState({ upper: true });
    }, 1800);

    setTimeout(() => {
      this.setState({ lower: true });
    }, 2300);

    setTimeout(() => {
      this.setState({ logov: true });
    }, 3350);

    setTimeout(() => {
      this.setState({ logot: true });
      this.setState({ isLoading: true });
    }, 4400);

    setTimeout(() => {
      this.setState({ mains: true });
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
    this.changeStates();
    this.about = document.getElementById("about");
    this.project = document.getElementById("project");
    this.contact = document.getElementById("contact");
    this.location = document.getElementById("location");
  }

  render() {
    let status = this.state;

    return (
      <div className={`wrapper main-wrapper ${status.isLoading ? "over" : ""}`}>
        <div className="App">
          <nav id="nav" className={`${status.mains ? "active" : ""}`}>
            <ul>
              <li>
                <a
                  href={"#" + this.about}
                  onClick={this.handleAbout}
                  className="tag"
                >
                  about
                </a>
              </li>
              <li>
                <a
                  href={"#" + this.project}
                  onClick={this.handleProject}
                  className="tag"
                >
                  project
                </a>
              </li>
              <li>
                <a
                  href={"#" + this.contact}
                  onClick={this.handleContact}
                  className="tag"
                >
                  contact
                </a>
              </li>
              <li>
                <a
                  href={"#" + this.location}
                  onClick={this.handleLocation}
                  className="tag"
                >
                  company
                </a>
              </li>
            </ul>
          </nav>

          <header className="App-header">
            <div className={`logo-wrap ${status.logov ? "active" : ""}`}>
              <svg
                id="logoLayer"
                x="0px"
                y="0px"
                viewBox="0 0 450 160"
                src="false"
              >
                <path
                  className={`chain-black black ${
                    status.black ? "active" : ""
                  }`}
                  d="M16.4,55.2l4.8-8.3h4.1c3.3,0,5.8-2.5,5.8-5.8V15.3c0-3.3-2.5-5.8-5.8-5.8h-10
	c-3.3,0-5.8,2.5-5.8,5.8v11c-3.1,0.8-5.8,2.5-8.3,4.7V15.3C1.4,7.8,7.6,1.4,15.3,1.4h10c3.8,0,7.2,1.4,10,4.1
	c2.5,2.8,4.1,6.1,4.1,10v25.9c0,7.7-6.4,14.1-14.1,14.1l0,0L16.4,55.2z"
                />
                <path
                  className={`chain-blue blue ${status.blue ? "active" : ""}`}
                  d="M15.3,89.5c-7.7,0-14.1-6.4-14.1-14.1V45.6c0-7.7,6.4-14.1,14.1-14.1h10.3l-4.4,8.3h-5.9
	c-3.3,0-5.8,2.5-5.8,5.8v29.9c0,3.3,2.5,5.8,5.8,5.8h10c1.6,0,3-0.6,4.1-1.7s1.7-2.5,1.7-4.1V60.7c3.1-0.8,5.8-2.5,8.3-4.7v19.4
	c0,7.7-6.4,14.1-14.1,14.1H15.3z"
                />

                <path
                  className={`black upper ${status.upper ? "active" : ""}`}
                  d="M91.7,34.5c-0.2,0.2-8.3,15.2-9.4,17.3l0,0c-1-2.1-9.2-17.2-9.4-17.3l0,0h-2.8v25.9h1.8v-0.2
	c0-0.2,0.2-20.1,0-24l9.6,17.3l0,0h1.8l9.6-17.3c0,3.7,0,23.8,0,24v0.2h1.8V34.5H91.7L91.7,34.5z"
                />

                <path
                  className={`black upper ${status.upper ? "active" : ""}`}
                  d="M116.7,47l-4.9-1.8h-0.2c-2.3-0.8-5.3-1.9-5.3-5c0-2.8,2.9-4.7,7.3-4.7c3.7,0,6.2,1.5,7.6,2.6
	c0,0,0.5,0.5,1,1.1l0.2,0.3v-2.3V37c-2.3-1.9-5.5-3.1-8.9-3.1c-5.3,0-9.2,2.6-9.2,6.3c0,4.1,4.2,5.5,6.6,6.3l4.9,1.8
	c2.9,1.1,5.8,2.1,5.8,5.5c0,3.2-3.2,5.3-8.3,5.3c-3.6,0-6.8-1.1-9.2-3.2l-0.2-0.2v2.1l0,0c2.6,1.8,5.7,2.8,9.4,2.8c6,0,10-2.8,10-7
	C123.5,49.9,120.1,48.3,116.7,47z"
                />

                <polygon
                  className={`black upper ${status.upper ? "active" : ""}`}
                  points="135.2,34.5 133.4,34.5 133.4,60.5 150.1,60.5 150.1,58.7 135.2,58.7 "
                />

                <rect
                  id="I"
                  x="162.8"
                  y="34.5"
                  className={`black upper ${status.upper ? "active" : ""}`}
                  width="1.8"
                  height="25.9"
                />

                <path
                  className={`black upper ${status.upper ? "active" : ""}`}
                  d="M196.4,57.9l-3.4-4.7l-13.9-18.6l0,0h-1.9v25.9h1.8V37l3.4,4.9l13.9,18.6l0,0h2.1v-26h-1.9L196.4,57.9z"
                />

                <polygon
                  className={`black upper ${status.upper ? "active" : ""}`}
                  points="209.6,60.5 227,60.5 227,58.8 211.4,58.8 211.4,47.8 226.6,47.8 226.6,46.5 211.4,46.5 
	211.4,36 227,36 227,34.5 209.6,34.5 "
                />
                <path
                  className={`black upper ${status.upper ? "active" : ""}`}
                  d="M262.4,47l-4.9-1.8h-0.2c-2.3-0.8-5.3-1.9-5.3-5c0-2.8,2.9-4.7,7.3-4.7c3.7,0,6.2,1.5,7.6,2.6
	c0,0,0.5,0.5,1,1.1l0.2,0.3v-2.3V37c-2.3-1.9-5.3-3.1-8.7-3.1c-5.3,0-9.2,2.6-9.2,6.3c0,4.1,4.2,5.5,6.6,6.3l4.9,1.8
	c2.9,1.1,5.8,2.1,5.8,5.5c0,3.2-3.2,5.3-8.3,5.3c-3.6,0-6.8-1.1-9.2-3.2l-0.2-0.2v2.1l0,0c2.6,1.8,5.7,2.8,9.4,2.8c6,0,10-2.8,10-7
	C269.4,49.9,266,48.3,262.4,47z"
                />

                <path
                  className={`black upper ${status.upper ? "active" : ""}`}
                  d="M295.1,34.5c0,0.2-7.3,10.2-8.6,12.2l0,0c-1.3-1.9-8.4-12-8.6-12.2l0,0h-2.1l9.7,13.8v12.2h1.8V48.3
	l9.7-13.8H295.1L295.1,34.5z"
                />

                <path
                  className={`black upper ${status.upper ? "active" : ""}`}
                  d="M315.3,47l-4.9-1.8h-0.2c-2.3-0.8-5.3-1.9-5.3-5c0-2.8,2.9-4.7,7.3-4.7c3.7,0,6.2,1.5,7.6,2.6
	c0,0,0.5,0.5,1,1.1l0.2,0.3v-2.3V37c-2.3-1.9-5.3-3.1-8.7-3.1c-5.3,0-9.2,2.6-9.2,6.3c0,4.1,4.2,5.5,6.6,6.3l4.9,1.8
	c2.9,1.1,5.8,2.1,5.8,5.5c0,3.2-3.2,5.3-8.3,5.3c-3.6,0-6.8-1.1-9.2-3.2l-0.2-0.2v2.1l0,0c2.6,1.8,5.7,2.8,9.4,2.8c6,0,10-2.8,10-7
	C322.3,49.9,318.9,48.3,315.3,47z"
                />

                <polygon
                  className={`black upper ${status.upper ? "active" : ""}`}
                  points="327.2,36 337.4,36 337.4,60.5 339.4,60.5 339.4,36 349.8,36 349.8,34.5 327.2,34.5 "
                />

                <polygon
                  className={`black upper ${status.upper ? "active" : ""}`}
                  points="356,60.5 373.5,60.5 373.5,58.8 358,58.8 358,47.8 373.2,47.8 373.2,46.5 358,46.5 358,36 
	373.5,36 373.5,34.5 356,34.5 "
                />

                <path
                  className={`black upper ${status.upper ? "active" : ""}`}
                  d="M402.2,34.5L402.2,34.5c-0.2,0.2-8.4,15.2-9.4,17.5l0,0c-1-2.1-9.4-17.2-9.4-17.3l0,0h-2.8v25.9h1.8
	v-0.2c0-0.2,0.2-20.1,0-24l9.6,17.3l0,0h1.8l9.6-17.3c0,3.7,0,23.8,0,24l0,0h1.8V34.5H402.2z"
                />
              </svg>
            </div>

            <img
              src={logo}
              id="logo-pc"
              className={`logot ${status.logot ? "active" : ""}`}
              alt="logo"
            />

            <img
              src={symbol}
              id="symbol"
              className={`logot ${status.logot ? "active" : ""}`}
              alt="symbol"
            />

            <div className={`mains ${status.mains ? "active" : ""}`}>
              <MainSlider />
              <div className="main-back-sub"></div>
            </div>
          </header>
        </div>

        <div className="App apps">
          <div id="about" className="App-header about">
            <Cards props={status.cards} />
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
