import React from 'react';
import './css/Contact.scss';

function Contact() {
    return (
        <>
            <div id="contact">
                <div className="contact-wrap">
                    <h1>Contact</h1>
                    <form action="">
                        <div className="input-div">
                            <input type="text" className="who tag dark" placeholder="이름 및 직책" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" required />
                            <label htmlFor="who">당신은 누구신가요?</label>
                        </div>
                        <div className="input-div">
                            <input type="email" className="email tag dark" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" placeholder="이메일 주소" required />
                            <label htmlFor="email">이메일 주소를 입력해 주세요</label>
                        </div>
                        <div className="input-div">
                            <input type="url" className="url tag dark" placeholder="참고 홈페이지 (URL)" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" required />
                            <label htmlFor="url">참고 사이트가 있으신가요?</label>
                        </div>
                        <div className="input-div input-textarea">
                            <textarea name="textarea" className="tag dark" id="textarea" cols="30" rows="5" placeholder="문의 내용" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" required></textarea>
                            <label htmlFor="textarea">문의 내용을 적어주세요</label>
                        </div>
                        <button className="submit-btn tag dark">보내기</button>
                    </form>
                </div>                
            </div>
        </>
    )
}

export default Contact