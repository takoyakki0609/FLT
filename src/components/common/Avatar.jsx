import React from "react";
import styled, {css} from "styled-components";

const AvatarFigure = styled.figure`
${(props)=>{
    switch(props.size){
        case "large":
        return css`
            width: 75px;
            height: 75px;
        `;
        default:
            return css`
                width: 50px;
                height: 50px;
            `
    }
}}
  width: 50px;
  height: 50px;
  border: 50%;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

function Avatar({ src,size }) {
  return (
    <AvatarFigure size={size}>
      <img src={src} alt="아바타이미지" />
    </AvatarFigure>
  );
}

export default Avatar;
