import React from 'react'
import Tabs from './Tabs'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Header() {

  return (
    <Container>
      <LoginBox>
          <Link to="/login">로그인</Link>
          <p>ㅣ</p>
          <Link to="/join">회원가입</Link>
      </LoginBox>
        <Title>
            팬레터함
        </Title>
        <Tabs/>
    </Container>
  )
}

const Container = styled.section`
    width: 100%;
    height: 300px;
    background-color: lightgray;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`

const LoginBox = styled.div`
  display: flex;
`

const Title = styled.h1`
    font-size:36px;
    font-weight:700 ;
    color: yellow;
    flex: 1;
    display: flex;
    align-items: center;
`