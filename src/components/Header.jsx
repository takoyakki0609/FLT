import React from "react";
import Tabs from "./Tabs";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.isLogin);
  console.log(userData);

  //로그아웃
  const logout = () => {
    localStorage.clear();
    window.location.replace("http://Localhost:3000/");
  };

  const onClickmove = (value) => {
    navigate(`/${value}`);
  };

  return (
    <Container>
      <LoginBox>
        {userData ? (
          <button onClick={logout}>로그아웃</button>
        ) : (
          <button onClick={() => onClickmove("login")}>로그인</button>
        )}

        <p>ㅣ</p>
        {userData ? (
          <button onClick={() => onClickmove("profile")}>마이페이지</button>
        ) : (
          <button onClick={() => onClickmove("join")}>회원가입</button>
        )}
      </LoginBox>
      <Title>팬레터함</Title>
      <Tabs />
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  height: 300px;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const LoginBox = styled.div`
  display: flex;
  & button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: yellow;
  flex: 1;
  display: flex;
  align-items: center;
`;
