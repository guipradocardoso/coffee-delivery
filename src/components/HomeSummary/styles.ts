import styled from "styled-components";

export const HomeSummaryContainer = styled.div`
   width: 100%;
   max-width: 1120px;
   margin: 0 auto;
   padding: 0 24px;
   display: flex;


`

export const HomeSummaryContent = styled.div`
display: flex;

`

export const HomeSummaryTitle = styled.div`
   display: flex;
   flex-direction: column;

`
export const HomeSummaryItems = styled.div`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   gap: 20px;
   justify-content: space-between;

   div:nth-child(odd) {
      width: 231px;
   }

   div:nth-child(even) {
      width: 294px;
   }

`

export const Items = styled.div`
  
   svg {
      width: 32px;
      height: 32px;
      border-radius: 100%;
      padding: 8px;
      color: ${props => props.theme["gray-100"]};
   }

   color: ${props => props.theme["gray-700"]};

   display: flex;
   align-items: center;
   gap: 12px;
`