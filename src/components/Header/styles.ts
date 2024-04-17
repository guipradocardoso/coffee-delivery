import { styled } from "styled-components";

export const HeaderContainer = styled.header`
   max-width: 1120px;
   width: 100%;
   height: 100%;
   margin: 0 auto;
   padding: 32px 24px;

   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: space-between;
   
   background: ${props => props.theme["gray-100"]};
`

export const HeaderImage = styled.div`
   display: flex;
   width: max-content;
   
`

export const HeaderActions = styled.div`
   display: flex;
   gap: 12px;
  
`

export const HeaderLocation = styled.div`
   display: flex;

   padding: 8px;
   border-radius: 6px;
   background: ${props => props.theme["purple-100"]};
   align-items: center;
   gap: 4px;

   span {
      color: ${props => props.theme["purple-900"]};
      font-size: 14px;

   }
   
`

export const HeaderCart = styled.div`
   display: flex;

   padding: 8px;
   border-radius: 6px;
   align-items: center;
   background: ${props => props.theme["yellow-100"]};

  
`