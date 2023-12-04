import Avatar from "components/common/Avatar";
import Button from "components/common/Button";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getFomattedDate } from "util/date";
import {useSelector, useDispatch} from "react-redux"
import { deleteLetter, editLetter } from "redux/modules/letters";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const HomeBtn = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;
const DetailWrapper = styled.section`
  background: gray;
  color: white;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 700px;
  min-height: 400px;
`;
const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AvatarandNickname = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Nickname = styled.span`
  font-size: 30px;
`;

const ToMember = styled.span`
  font-size: 24px;
`;

const Content = styled.p`
  font-size: 24px;
  line-height: 30px;
  padding: 12px;
  background-color: black;
  border-radius: 12px;
  height: 200px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

const Textarea = styled.textarea`
  font-size: 24px;
  line-height: 30px;
  padding: 12px;
  background-color: black;
  border-radius: 12px;
  height: 200px;
  resize: none;
  color: white;
`;

function Detail() {
  const dispatch = useDispatch();
  const letters = useSelector(state=>state.letters)
  // const {letters, setLetters} = useContext(LetterContext)
  const [editingText, setEditingText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { avatar, nickname, createdAt, writedTo, content } = letters.find(
    (letter) => letter.id === id
  );

  const onDeleteBtn = () => {
    const answer = window.confirm("정말로 삭제 하시겠습니까?");
    if (!answer) return;

    dispatch(deleteLetter(id))
    navigate("/");
    
  };

  const onEditDone = () => {
    if (!editingText) return alert("수정사항이 없습니다.");

    dispatch(editLetter({id, editingText}))

    setIsEditing(false)
    setEditingText("")
  };

  return (
    <Container>
      <HomeBtn>
        <Link to="/">
          <Button text="홈으로" />
        </Link>
      </HomeBtn>

      <DetailWrapper>
        <UserInfo>
          <AvatarandNickname>
            <Avatar src={avatar} size="large" />
            <Nickname>{nickname}</Nickname>
            <time>{getFomattedDate(createdAt)}</time>
          </AvatarandNickname>
        </UserInfo>
        <ToMember>{writedTo}</ToMember>
        {isEditing ? (
          <>
            <Textarea
              autoFocus
              defaultValue={content}
              onChange={(e) => setEditingText(e.target.value)}
            />
            <ButtonWrapper>
              <Button text="취소" onClick={() => setIsEditing(false)} />
              <Button text="수정완료" onClick={onEditDone} />
            </ButtonWrapper>
          </>
        ) : (
          <>
            <Content>{content}</Content>
            <ButtonWrapper>
              <Button text="수정" onClick={() => setIsEditing(true)} />
              <Button text="삭제" onClick={onDeleteBtn} />
            </ButtonWrapper>
          </>
        )}
      </DetailWrapper>
    </Container>
  );
}

export default Detail;
