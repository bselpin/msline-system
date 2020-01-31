import React from 'react';
import './css/Cards.scss';
import "./css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import About01 from './img/about01.svg';
import About02 from './img/about02.svg';
import About03 from './img/about03.svg';
import About04 from './img/about04.svg';
import About05 from './img/about05.svg';
import fabric from './img/fabric.png'
import explorer from './img/explorer.png'

const Cards = () => {
    const arr = [
        {
            svg: About01,
            titleKR: '웹솔루션 개발',
            titleEN: 'Web Application',
            list: [
                '기업 홈페이지 및 업무용 웹 APP 제작',
                '웹 크롤링 및 HTML 파싱',
                '다양한 OS, 플랫폼에서의 웹서버 구축',
                '강력한 성능의 WAS'
            ]
        },
        {
            svg: About02,
            titleKR: '가상화폐 생태계 구축 및 솔루션',
            titleEN: 'Crypto Currency Solution',
            list: [
                '가상화폐 거래,교환소 개발',
                '가상화폐 P2P 거래소 개발',
                '가상화폐 PAY 솔루션 개발',
                '외부 연동 API 모듈 개발'
            ]
        },
        {
            svg: About03,
            titleKR: '블록체인 기반 기술 구현',
            titleEN: 'Blockchain Core Implementation',
            list: [
                '블록체인 노드 구축',
                '윈도우 및 모바일 전자지갑 개발',
                '블록체인 기반 확장 APP개발'
            ]
        },
        {
            svg: About04,
            titleKR: '기업 자원관리 시스템',
            titleEN: 'ERP',
            list: [
                '경영정보 시스템 – 인사, 회계, 재고 관리',
                '생산공정 시스템 – 원자재 BOM, 공정률',
                '고객관리 시스템 – SCM, 거래처 관리',
                '그 외 다양한 사무 자동화 시스템'
            ]
        },
        {
            svg: About05,
            titleKR: '모바일 솔루션',
            titleEN: 'Mobile Platform',
            list: [
                'Social Commerce',
                'SNS – Social Network Service',
                '각종 Community 플랫폼',
                'Live Chat 플랫폼',
                '전문 마켓 플랫폼'
            ]
        },
    ]
    
    return (
        <>
        <div className="hyper"> 
            <div className="left">
                <div className="wrapper">
                    <ScrollAnimation animateIn="fadeInUp">   
                    <h1>MSLINE:SYSTEM is</h1>
                    <p>MSLINE SYSTEM은 가상화폐 생태계 구축 및 솔루션, 시스템 개발 및 운용, 웹사이트 제작 등을 다양하게 경험해 본 전문가 집단으로 이루어져 있습니다.</p>
                    <p>MSLINE SYSTEM에서는 3세대 블록체인 기술인 Hyperledger를 사용하여 금융, IoT, 물류, 제조 등 각 기업에 맞는 비즈니스 네트워크를 개발합니다.</p>
                    <div className="hyperledger">
                        <img src={fabric} alt="fabric"/>
                        <img className="ex" src={explorer} alt="explorer"/>
                    </div>
                    </ScrollAnimation>
                </div>                    
            </div>
            <ScrollAnimation animateIn="fadeInUp" className="right"> 
            </ScrollAnimation>
        </div>  
        <ScrollAnimation animateIn="fadeInUp" className="cards">                    
        {arr.map((arr, idx) => {
            return (
                <div className={`card card0${idx}`} key={idx}>
                <img src={arr.svg} alt={"about"+idx} />
                <h2>{arr.titleKR}</h2>
                <h3>{arr.titleEN}</h3>
                {arr.list.map((list, idx) => <p key={idx}>{list}</p>)} 
                </div> 
            )
        })}   
        </ScrollAnimation>
        </>
    )
}


export default Cards