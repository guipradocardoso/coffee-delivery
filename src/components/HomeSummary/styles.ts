import styled from "styled-components";

export const HomeSummaryContainer = styled.div`
   width: 1120px;
   height: auto;
   margin: 0 auto;
   padding: 0 24px;
   
   display: flex;
   gap: 56px;

   img {
      width: 43%;
      height: auto;
      object-fit: none;
   }
`

export const HomeSummaryContent = styled.div`
   display: flex;
   width: 100%;

`

export const HomeSummaryTitle = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;

   h1 {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      font-size: 48px;
      line-height: 130%;
      padding-bottom: 16px;
      color: ${props => props.theme["gray-900"]};
   }

   span {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 20px;
      line-height: 130%;
   }

`
export const HomeSummaryItems = styled.div`
   width: 100%;
   padding-top: 66px;

   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   gap: 20px;

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