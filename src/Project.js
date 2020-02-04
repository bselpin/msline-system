import React from 'react';
import './css/Project.scss';
import "./css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import wallet from './img/wallet.svg'
import node from './img/node.svg'
import pay from './img/pay.svg'
import walletApp from './img/wallet.png'
import nodeApp from './img/node.png'
import payApp from './img/pay.png'
import bitgene from './img/bitgene.jpg'
import math from './img/math.jpg'
import tuntun from './img/tuntun.jpg'
import yoon from './img/yoon.jpg'

class Project extends React.Component {
    render() {
        return (
            <>
            <div id="project" className="project">
                <div className="wrapper">
                    <h1>Project</h1>                    
                    <ScrollAnimation animateIn="fadeInUp">
                    <div className="project-container masters">
                        <h3>블록체인 기반 프로젝트 - MASTER 플랫폼</h3>
                        <p className="info">X-widget에서 서비스하는 코인 생태계 활성화를 위한 마스터플랫폼 DAPP개발</p>
                        <div className="master-wrap">
                            <div className="master">
                                <img className="logo" src={wallet} alt="wallet" />
                                <img src={walletApp} alt="walletApp" />
                                <p>비트코인, 이더리움과 같은 각종 상장 코인들을 최신 보안기술로 안전하게 거래가능한 멀티월렛</p>
                            </div>
                            <div className="master">
                                <img className="logo" src={node} alt="node" />
                                <img src={nodeApp} alt="nodeApp" />
                                <p>PoS, DPoS를 통해 리워드를 일정주기로 보상받을 수 있는 코인자산 운용 플랫폼</p>
                            </div>
                            <div className="master">
                                <img className="logo" src={pay} alt="pay" />
                                <img src={payApp} alt="payApp" />
                                <p>글로벌 페이먼트사와 제휴가 가능한 블록체인 기반 페이먼트 서비스 어플리케이션</p>
                            </div>
                        </div>                        
                    </div>
                    </ScrollAnimation>
                    
                    <ScrollAnimation animateIn="fadeInUp">
                    <div className="project-container bg">
                        <h3>블록체인 기반 프로젝트 - BITGENE</h3>
                        <p className="info">가상화폐 거래소 및 외부 연동 API 개발</p>
                        <div className="project-wrap">
                            <img className="logo" src={bitgene} alt="bitgene" />
                            <p>안전한 거래가 가능한 암호화폐 거래소 개발</p>
                        </div>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp">
                    <div className="project-container">
                        <div className="project-flex project-wrap">
                            <div className="edu pr">
                                <h3>웹 솔루션 개발 및 보수 - 튼튼영어</h3>
                                <p className="info">기업 홈페이지 및 교육용 웹 APP 제작 <br></br> 교육 솔루션 개발</p>
                                <img src={tuntun} alt="tuntun" />
                            </div>
                            <div className="edu pl">
                                <h3>웹 솔루션 개발 및 보수 - 윤선생 영어교실</h3>
                                <p className="info">기업 홈페이지 및 교육용 웹 APP 제작 <br></br>웹 크롤링 및 HTML파싱</p>
                                <img src={yoon} alt="yoon" />
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp">
                    <div className="project-container bg">
                        <h3>웹 솔루션 개발 및 보수 - 수학여우</h3>
                        <p className="info">기업 홈페이지 및 교육용 웹 APP 제작 <br></br> 교육 솔루션 개발</p>
                        <div className="project-wrap">
                        <img className="logo" src={math} alt="math" />
                        </div>
                    </div>
                    </ScrollAnimation>
                </div> 
            </div>
            </>
        )
    }
}

export default Project