import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "redux/modules/authSlice";

function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePw = (e) => {
    setPw(e.target.value);
  };

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    await axios
      .post("https://moneyfulpublicpolicy.co.kr/login", {
        id: id,
        password: pw,
      })
      .then((response) => {
        console.log(response.data);
        dispatch(setUser(response.data));
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("avatar", response.data.avatar);
        localStorage.setItem("nickname", response.data.nickname);
        localStorage.setItem("userId", response.data.userId);
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
      <LoginBox onSubmit={onSubmitLogin}>
        <h3>로그인</h3>
        <input
          value={id}
          onChange={onChangeId}
          type="id"
          placeholder="아이디(4~10글자)"
          minLength="4"
          maxLength="10"
        />
        <input
          value={pw}
          onChange={onChangePw}
          type="password"
          placeholder="비밀번호(4~15글자)"
          minLength="4"
          maxLength="15"
        />
        <Button type="submit" text="로그인" />
        <Link to="/join">회원가입</Link>
      </LoginBox>
    </Container>
  );
}

export default Login;

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
  & a {
    text-decoration: none;
    color: gray;
    margin-top: 10px;
    font-size: 13px;
  }
`;
