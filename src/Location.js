/*global kakao*/
import React from "react";
import "./css/Location.scss";
import "./css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import logoblue from "./img/logo-blue.svg";

class Location extends React.Component {
  constructor(prop) {
    super(prop);
    this.revealTopBtn();
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "http://dapi.kakao.com/v2/maps/sdk.js?appkey=d686d0cf4d2d3680f083a7dbaba7e25d&autoload=true";
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        const LAT = "37.496586";
        const LNG = "127.029732";
        let el = document.getElementById("map");
        let map = new kakao.maps.Map(el, {
          center: new kakao.maps.LatLng(LAT, LNG),
        });

        let markerPosition = new kakao.maps.LatLng(LAT, LNG);

        let marker = new kakao.maps.Marker({
          position: markerPosition,
        });

        marker.setMap(map);
      });
    };
  }

  revealTopBtn() {
    window.onscroll = function () {
      let wh = window.innerHeight;
      let ws = window.scrollY;
      let bo = document.body.offsetHeight;

      if (wh + ws >= bo) {
        document.getElementById("top-btn").classList.add("active");
      } else if (ws <= 50) {
        document.getElementById("top-btn").classList.remove("active");
      }
    };
  }

  toTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    document.getElementById("top-btn").classList.remove("active");
  }

  render() {
    return (
      <>
        <div id="location">
          <ScrollAnimation animateIn="fadeIn">
            <div className="map-wrap">
              <h1>Company</h1>
              <div id="map"></div>
            </div>
          </ScrollAnimation>

          <footer className="footer">
            <ScrollAnimation animateIn="fadeIn">
              <img src={logoblue} alt="" className="logo-blue" />
              <p>(주)엠에스라인 시스템</p>
              <p>서울특별시 강남구 역삼동 826-26 패스트파이브빌딩 1104호</p>
              <p>
                <span className="label">CEO</span>조광호
              </p>
              <p>
                <span className="label">T</span>
                <span>070 4616 4766</span>
              </p>
              <p>
                <span className="label">F</span>
                <span>070 8277 3310</span>
              </p>
              <p>
                <span className="label">사업자 등록번호</span>212-81-99522
              </p>
            </ScrollAnimation>

            <div id="top-btn" className="top-btn tag" onClick={this.toTop}>
              <p>TOP</p>
            </div>
          </footer>
        </div>
      </>
    );
  }
}

export default Location;
