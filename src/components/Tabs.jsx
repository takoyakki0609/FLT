
import styled, { css } from "styled-components";
import {useSelector, useDispatch} from "react-redux"
import { setMember } from "redux/modules/member";

export default function Tabs() {

  // const {activeMember, setActiveMember} =useContext(MemberContext)
  const activeMember = useSelector(state => state.member)
  const dispatch = useDispatch()

 const onActiveMember = (e) => {
    if(e.target === e.curruentTarget) return
    // setActiveMember(e.target.textContent)
    dispatch(setMember(e.target.textContent))
 }
  return (
    <TabsWrapper onClick={onActiveMember}>
      <Tab $activeMember={activeMember}>카리나</Tab>
      <Tab $activeMember={activeMember}>윈터</Tab>
      <Tab $activeMember={activeMember}>닝닝</Tab>
      <Tab $activeMember={activeMember}>지젤</Tab>
    </TabsWrapper>
  );
}

const TabsWrapper = styled.ul`
  background-color: gray;
  display: flex;
  justify-content: space-between;
  padding: 12px;
  gap: 12px;
  border-radius: 10px;
`;
const Tab = styled.li`
  ${(props) => {
    if (props.$activeMember === props.children) {
      return css`
        background-color: yellow;
        color: black;
      `;
    }
    return css`
      background-color: black;
      color: white;
    `;
  }}

  font-size: 20px;
  width: 80px;
  text-align: center;
  padding: 12px 6px;
  cursor:pointer; 
`;
