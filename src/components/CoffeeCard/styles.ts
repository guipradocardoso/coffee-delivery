import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
   width: 98%;
   min-width: 256px;
   min-height: 310px;
   background: ${props => props.theme["gray-300"]};
   display: flex;
   flex-direction: column;
   border-radius: 6px 36px;

   margin-bottom: 40px;

   text-align: center;

`

export const CoffeeCardImg = styled.img`
   margin-top: -20px;
   max-width: 120px;
   max-height: 120px;
   align-self: center;

`
export const CardTags = styled.div`
   margin-top: 12px;

   display: flex;
   align-items: center;
   align-self: center;
   gap: 4px;

   span{
      padding: 4px 8px;
      border-radius: 100px;
      background: ${props => props.theme["yellow-100"]};
      color: ${props => props.theme["yellow-900"]};
      font-weight: 700;
      line-height: 130%;
      font-size: 10px;
      text-transform: uppercase;
   }


`

export const CardTitle = styled.h3`
   margin-top: 16px;
   color: ${props => props.theme["gray-900"]};
   font-family: "Baloo 2", sans-serif;
   font-weight: 700;
   font-size: 20px;
   line-height: 130%;
`

export const CardDescription = styled.span`
   max-width: 216px;
   align-self: center;
   margin-top: 8px;
   margin-bottom: 33px;

   font-size: 14px;
   line-height: 130%;
`

export const CoffeeCardContent = styled.div`
   width: 100%;
   display: flex;
   flex-wrap: wrap;

`

export const CoffeePrice = styled.div`
   display: flex;
   align-items: baseline;


   span:first-child{
      color: ${props => props.theme["gray-700"]};
      font-size: 14px;
   }

   span:last-child{
      font-family: "Baloo 2", sans-serif;
      font-weight: 800;
      font-size: 24px;
      color: ${props => props.theme["gray-700"]};
   }

`