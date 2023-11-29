import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./common/Button";

function Join() {
  return (
    <Container>
    <LoginBox>
      <h3>회원가입</h3>
      <input type="id" placeholder="아이디(4~10글자)" minLength="4" maxLength="10" />
      <input type="password" placeholder="비밀번호(4~15글자)" minLength="4" maxLength="15"/>
      <input type="nickname" placeholder="닉네임(1~15글자)" minLength="1" maxLength="10"/>
      <Button text="회원가입"/>
      <Link to="/join">로그인</Link>
    </LoginBox>
  </Container>
  )
}

export default Join

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
const LoginBox = styled.form`
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
  & a{
    text-decoration: none;
    color: gray;
    margin-top: 10px;
    font-size: 13px;
  }
`;
