import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Avatar from "./common/Avatar";
import { getFomattedDate } from "util/date";

const LetterWrapper = styled.li`
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: white;
  padding: 12px;
  border: 1px solid white;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover{
    transform: scale(1.02)
  }
`;
const UserInfo = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const NicknameAndDate = styled.div`
display: flex;
flex-direction: column;
gap: 6px;
`
const Content =styled.p`
    background-color: gray;
    border-radius: 12px;
    padding: 12px;
    margin-left: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

function LetterCard({letter}) {
    const navigate = useNavigate()
    

  return (
    <LetterWrapper onClick={()=>navigate(`/detail/${letter.id}`)}>
      <UserInfo>
      <Avatar src={letter.avatar}/>
        <NicknameAndDate>
          <p>{letter.nickname}</p>
          <time>{getFomattedDate(letter.createdAt)}</time>
        </NicknameAndDate>
      </UserInfo>
      <Content>{letter.content}</Content>
    </LetterWrapper>
  );
}

export default LetterCard;
