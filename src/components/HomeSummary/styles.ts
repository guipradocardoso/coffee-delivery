import styled from "styled-components";

export const HomeSummaryContainer = styled.div`
   max-width: 1120px;
   width: 98%;
   height: 100%;
   margin: 0 auto;
   padding: 94px 0 108px;

   display: flex;
   gap: 56px;
   align-items: center;
`

export const HomeSummaryContent = styled.div`
   width: 60%;
`

export const HomeSummaryTitle = styled.div`
   width: 100%;
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
   }

`
export const HomeSummaryItems = styled.div`
   width: 100%;

   padding-top: 66px;
   
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
   display: flex;
   gap: 12px;
   align-items: center;
  
   svg {
      width: 32px;
      height: 32px;
      border-radius: 100%;
      padding: 8px;
      color: ${props => props.theme["gray-100"]};
   }

   color: ${props => props.theme["gray-700"]};

`

export const HomeLogo = styled.div`
   width: 48%;
   overflow: hidden;

   img{
      width: 100%;
      height: auto;
      display: block;
      top: 0;
      left: 0;
   }

`