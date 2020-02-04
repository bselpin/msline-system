import React from 'react';
import './css/Contact.scss';
import axios from 'axios'
import "./css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const handleSubmit = (e) => {
    e.preventDefault()
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const url = document.getElementById('url').value
    const textarea = document.getElementById('textarea').value

    axios({
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        url: "http://211.251.250.21:4000/msline-sands",
        method: "post",
        data: {
            name: name,
            email: email,
            url: url,
            textarea: textarea
        }
    }).then((res) => {
        if(res.status === 200 || res.status === 201) {
            successSend()
            resetForm()
        } else {
        }       
    })
}

const successSend = () => {
    const submitBtn = document.getElementById("submit-btn")
    submitBtn.innerText = ""
    submitBtn.classList.add("success")
    const resetAnim = () => {
        submitBtn.innerText = "보내기"
        submitBtn.classList.remove("success")
    }
    submitBtn.addEventListener("animationend", resetAnim, false);
    resetForm()
}

const resetForm = () => {
    document.getElementById('contact-form').reset()
}

const Contact = () => {
    return (
        <>
        <div id="contact">
            <div className="contact-wrap">
                <ScrollAnimation animateIn="fadeInUp">                    
                    <h1>Contact</h1>                
                    <form action="/msline-sands" method="post" id="contact-form" onSubmit={handleSubmit}>
                        <div className="input-div">
                            <input id="name" type="text" className="who tag dark" placeholder="이름 및 직책" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" required />
                            <label htmlFor="who">당신은 누구신가요?</label>
                        </div>
                        <div className="input-div">
                            <input id="email" type="email" className="email tag dark" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" placeholder="이메일 주소" required />
                            <label htmlFor="email">이메일 주소를 입력해 주세요</label>
                        </div>
                        <div className="input-div">
                            <input id="url" type="url" className="url tag dark" placeholder="참고 홈페이지 (URL)" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"/>
                            <label htmlFor="url">참고 사이트가 있으신가요?</label>
                        </div>
                        <div className="input-div input-textarea">
                            <textarea id="textarea" name="textarea" className="tag dark" cols="30" rows="5" placeholder="문의 내용" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" required></textarea>
                            <label htmlFor="textarea">문의 내용을 적어주세요</label>
                        </div>
                        <button id="submit-btn" className="submit-btn tag dark" onClick={successSend}>보내기</button>
                    </form>
                </ScrollAnimation>
            </div>                
        </div>
        </>
    )
}

export default Contact