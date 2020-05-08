import React from "react";
import Slider from "infinite-react-carousel";
import "./css/App.scss";

class MainSlider extends React.Component {
  render() {
    const settings = {
      className: "main-slider",
      autoplay: false,
      dots: true,
      dotClass: "slider-dots",
      autoplaySpeed: 5000,
      duration: 300,
      swipe: true,
      slidesToShow: 1,
    };

    return (
      <div className="main-back">
        <Slider {...settings}>
          <div>
            <h1>최고의 비즈니스 파트너</h1>
            <h3>
              MSLINE:SYSTEM은
              <br />
              고객의 입장에서 생각하고, <br />
              고객의 가치를 실현하기위해 끊임없이 고민합니다.
            </h3>
          </div>
          <div>
            <h1>블록체인 시장 진입을 위한 빠른 시작</h1>
            <h3>
              MSLINE:SYSTEM은
              <br />
              안정된 보안기술과 블록체인의 융합으로
              <br />
              간편하고 신뢰할 수 있는 블록체인 서비스를 제공합니다.
            </h3>
          </div>
          <div>
            <h1>상상이 기술을 통해 현실이 되다</h1>
            <h3>
              MSLINE:SYSTEM은
              <br />
              각 분야별 전문가가 구축 목적과 기능들을 완벽히 분석, <br />
              고객의 요구사항을 최상의 결과물로 실현하고 있습니다.
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default MainSlider;
