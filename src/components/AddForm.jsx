import React, { useContext, useState } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import Button from "./common/Button";
import { LetterContext } from "context/LetterContext";
import { useDispatch } from "react-redux";
import { addLetter } from "redux/modules/letters";

const Form = styled.form`
  background-color: gray;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 500px;
  border-radius: 12px;
  margin: 20px 0;
`;
const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & label {
    width: 80px;
  }
  & input,
  textarea {
    width: 100%;
    padding: 12px;
  }
  & textarea {
    resize: none;
    height: 80px;
  }
`;

const SelectWrapper = styled(InputWrapper)`
  justify-content: flex-start;
  & label {
    width: 190px;
  }
`;


export default function AddForm() {
  const dispatch = useDispatch('')
  // const {setLetters} = useContext(LetterContext)
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [member, setMember] = useState("카리나");

  const onAddLetter = (e) => {
    e.preventDefault();
    if (!nickname || !content) return alert("닉네임과 내용은 필수값입니다.");

    const newLetter = {
      id: uuid(),
      nickname,
      content,
      avatar: null,
      createdAt: new Date(),
      writedTo: member,
    };

    // setLetters((prev) => [newLetter, ...prev]);
    dispatch(addLetter(newLetter))
    setNickname("")
    setContent("")
  };
  return (
    <Form onSubmit={onAddLetter}>
      <InputWrapper>
        <label htmlFor="">닉네임</label>
        <input
          placeholder="최대 20글자까지 작성할 수 있습니다."
          maxLength={20}
          onChange={(e) => setNickname(e.target.value)}
          value={nickname}
        />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="">내용</label>
        <textarea
          placeholder="최대 100글자까지 작성할 수 있습니다."
          maxLength={100}
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
      </InputWrapper>
      <SelectWrapper>
        <label htmlFor="">누구에게 보내실 건가요?</label>
        <select onChange={(e) => setMember(e.target.value)}>
          <option value="">카리나</option>
          <option value="">윈터</option>
          <option value="">닝닝</option>
          <option value="">지젤</option>
        </select>
      </SelectWrapper>
      <Button text="팬레터 등록"/>
    </Form>
  );
}
