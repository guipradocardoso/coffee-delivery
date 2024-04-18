import styled from "styled-components";

export const CoffeeListContainer = styled.div`
   width: 98%;
   max-width: 1120px;
   margin: 0 auto;
   padding: 32px 0;

   display: flex;
   flex-wrap: wrap;

`

export const CoffeeListHeader = styled.div`
   width: 100%;
   padding-bottom: 34px;

   h2 {
      font-family: "Baloo 2", sans-serif;
      font-weight: 800;
      font-size: 32px;
      line-height: 130%;

      color: ${props => props.theme["gray-800"]};
   }
`

export const CoffeeListContent = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 32px;
`