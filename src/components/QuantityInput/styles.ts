import styled from "styled-components";

export const QuantityInputContainer = styled.div`
   padding: 8.5px 8px;
   background-color: ${props => props.theme["gray-500"]};
   border-radius: 6px;

   display: flex;
   align-items: center;
   gap: 4px;


   button {
      background: transparent;
      border: 0;
      align-items: center;
      cursor: pointer;
   }

   button svg {
      color: ${props => props.theme["purple-500"]};

      transition: all 0.2s;

      &:hover {
         transform: scale(1.25);
         color: ${props => props.theme["purple-900"]};
      }
   }

   span {
      width: 20px;
      height: 21px;
      color: ${props => props.theme["gray-900"]};
   }
`