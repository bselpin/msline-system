import React from 'react';
import './css/Cards.scss';
import "./css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const Cards = ({props}) => {
    return (
        <>
        <ScrollAnimation animateIn="fadeInUp"> 
            <div className="cards">                       
                {props.map((card, idx) => {
                    return (
                        <div className={`card card0${idx}`} key={idx}>
                        <img src={card.svg} alt={"about"+idx} />
                        <h2>{card.titleKR}</h2>
                        <h3>{card.titleEN}</h3>
                        {card.list.map((list, idx) => <p key={idx}>{list}</p>)} 
                        </div> 
                    )
                })}             
            </div>
        </ScrollAnimation> 
        </>
    )
}

export default Cards