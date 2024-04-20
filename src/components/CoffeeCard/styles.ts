import styled from "styled-components";

export const CoffeeMain = styled.main`
   display: flex;
   flex-wrap: wrap;
   gap: 32px;
`

export const CoffeeCardContainer = styled.div`
   width: 100%;
   width: 256px;
   height: 310px;
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

export const CoffeeCardBuy = styled.div`
   width: 100%;
   margin: 0 auto;
   max-width: 208px;
   display: flex;
   justify-content: center;
   align-items: center;

   gap: 23px;
`

export const CoffeePrice = styled.div`
   display: flex;
   gap: 5px;
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

export const CoffeeOrder = styled.div<{ $itemAdded?: boolean}>`
   display: flex;
   align-items: center;
   gap: 8px;

   > button {
   background-color: ${({ theme, $itemAdded}) => $itemAdded ? theme["yellow-900"] : theme["purple-900"]};

   &:hover {
      background-color: ${({ theme, $itemAdded}) => $itemAdded ? theme["yellow-500"] : theme["purple-500"]}
   };
   
}
`

export const CoffeeOrderButton = styled.button`
   display: flex;

   background: ${props => props.theme["purple-900"]};
   border: 0;
   padding: 8px;
   border-radius: 6px;
`