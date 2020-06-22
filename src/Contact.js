import React, { useState } from "react";
import "./css/Contact.scss";
import axios from "axios";
import "./css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [page, setPage] = useState("");
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePage = (e) => {
    setPage(e.target.value);
  };

  const updateText = (e) => {
    setText(e.target.value);
  };

  const success = () => {
    setDone(true);
    setTimeout(() => {
      setDone(false);
    }, 2500);
  };

  const fail = () => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 2500);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    let fName = encodeURIComponent(name);
    let fMail = encodeURIComponent(email);
    let fUrl = encodeURIComponent(page);
    let fText = encodeURIComponent(text);
    let myHeaders = new Headers();
    let formdata = new FormData();
    formdata.append("name", fName);
    formdata.append("tel", fMail);
    formdata.append("refurl", fUrl);
    formdata.append("content", fText);

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "http://msline.net/index.php/welcome/sendProjectRequest",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        setName("");
        setEmail("");
        setPage("");
        setText("");
        success();
      })
      .catch((error) => {
        fail();
      });
  };

  return (
    <>
      <div id="contact">
        <div className="contact-wrap">
          <ScrollAnimation animateIn="fadeInUp">
            <h1>Contact</h1>
            <form id="contact-form" onSubmit={sendEmail}>
              <div className="input-div">
                <input
                  id="name"
                  type="text"
                  className="who tag dark"
                  placeholder="이름 및 직책"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  value={name}
                  onChange={updateName}
                  required
                />
                <label htmlFor="who">이름 및 직책을 입력해 주세요</label>
              </div>
              <div className="input-div">
                <input
                  id="email"
                  type="email"
                  className="email tag dark"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  placeholder="이메일 주소"
                  value={email}
                  onChange={updateEmail}
                  required
                />
                <label htmlFor="email">이메일 주소를 입력해 주세요</label>
              </div>
              <div className="input-div">
                <input
                  id="url"
                  type="text"
                  className="url tag dark"
                  placeholder="참고 홈페이지 (URL)"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  onChange={updatePage}
                  value={page}
                />
                <label htmlFor="url">참고 사이트가 있으신가요?</label>
              </div>
              <div className="input-div input-textarea">
                <textarea
                  id="textarea"
                  name="textarea"
                  className="tag dark"
                  cols="30"
                  rows="5"
                  placeholder="문의 내용"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  value={text}
                  onChange={updateText}
                  required
                ></textarea>
                <label htmlFor="textarea">문의 내용을 적어주세요</label>
              </div>
              <button id="submit-btn" className="submit-btn tag dark">
                보내기
              </button>
              <div className={done ? "done-message active" : "done-message"}>
                성공적으로 발송을 완료하였습니다
              </div>
              <div className={error ? "error-message active" : "error-message"}>
                네트워크 문제가 발생했습니다. 다시 시도해 주세요
              </div>
            </form>
          </ScrollAnimation>
        </div>
      </div>
    </>
  );
};

export default Contact;
