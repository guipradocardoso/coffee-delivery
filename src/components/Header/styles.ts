import { styled } from "styled-components";

export const HeaderContainer = styled.header`
   width: 100%;
   width: 1120px;
   height: auto;
   margin: 0 auto;
   background: ${props => props.theme["gray-100"]};
   padding: 32px 0;
`

export const HeaderContent = styled.div`
   width: 100%;
   height: auto;
   padding: 0 24px;

   display: flex;
   justify-content: space-between;
   align-items: center;
`

export const HeaderActions = styled.div`
   display: flex;
   align-items: center;
   gap: 12px;

`

export const HeaderLocation = styled.div`
   width: 143px;
   height: 38px;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 4px;

   background-color: ${props => props.theme["purple-100"]};
   color: ${props => props.theme["purple-900"]};
   border-radius: 6px;

   span {
      font-size: 14px;
      font-weight: 400;
      color: ${props => props.theme["purple-900"]};
   }

`

export const HeaderCart = styled.div`
   width: 38px;
   height: 38px;
   background-color: ${props => props.theme["yellow-100"]};

   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 6px;
`