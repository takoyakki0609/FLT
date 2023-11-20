import AddForm from 'components/AddForm'
import Header from 'components/Header'
import LetterList from 'components/LetterList'
import React, { useState } from 'react'
import styled from 'styled-components'
import fakeData from "fakeData.json";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

function Home({letters, setLetters}) {
    const [activeMember, setActiveMember] = useState("카리나");
    
  return (
    <Container>
        <Header activeMember={activeMember} setActiveMember={setActiveMember}/>
        <AddForm setLetters={setLetters}/>
        <LetterList letters={letters} activeMember={activeMember}/>

    </Container>
  )
}

export default Home
