import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Button from "./common/Button";
import axios from "axios";

function Join() {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [nickname, setNickname] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      id: id,
      password: pw,
      nickname: nickname,
    };
    await axios
      .post("https://moneyfulpublicpolicy.co.kr/register", newUser)
      .then((result) => {
        console.log(result);
        alert("회원가입 되셨습니다");
        navigate("/");
      })
      .catch((error) => {
        console.log("error", error);
        const errMsg = error.request.response;
        alert(errMsg);
      });
  };

  return (
    <Container>
      <JoinBox onSubmit={handleOnSubmit}>
        <h3>회원가입</h3>
        <input
          value={id}
          type="id"
          onChange={(e) => {
            setId(e.target.value);
          }}
          placeholder="아이디(4~10글자)"
          minLength="4"
          maxLength="10"
        />
        <input
          value={pw}
          type="password"
          onChange={(e) => {
            setPw(e.target.value);
          }}
          placeholder="비밀번호(4~15글자)"
          minLength="4"
          maxLength="15"
        />
        <input
          value={nickname}
          onChange={(e) => {
            setNickname(e.target.value);
          }}
          type="nickname"
          placeholder="닉네임(1~15글자)"
          minLength="1"
          maxLength="10"
        />

        <Button text="회원가입" />
        <Link to="/login">로그인</Link>
      </JoinBox>
    </Container>
  );
}

export default Join;

const Container = styled.div`
  background-color: #b6bbc4;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h3 {
    font-size: 30px;
    text-align: left;
  }
`;
const JoinBox = styled.form`
  background-color: white;
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & input {
    padding: 10px 20px;
    margin: 10px;
  }
  & a {
    text-decoration: none;
    color: gray;
    margin-top: 10px;
    font-size: 13px;
  }
`;
