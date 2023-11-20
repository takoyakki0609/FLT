
import { useContext } from "react";
import LetterCard from "./LetterCard";
import styled from "styled-components";
import { LetterContext } from "context/LetterContext";
export default function LetterList({activeMember}) {

  const {letters} = useContext(LetterContext)
    const filteredLetters = letters.filter((letter=>letter.writedTo===activeMember))

  return (
    <ListWrapper>
      {filteredLetters.length === 0 ? <p>{activeMember}에게 남겨진 팬레터가 없습니다. 첫 번째 팬레터의 주인공이 되어보세요!</p>:filteredLetters.map((letter) => (
        <LetterCard letter={letter} />
      ))}
    </ListWrapper>
  );
}

const ListWrapper = styled.ul`
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
  border-radius: 12px;
  padding: 12px;
  color: white;
`;
