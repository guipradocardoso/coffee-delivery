import { useEffect, useState } from "react";
import { CardDescription, CardTags, CardTitle, CoffeeCardContainer, CoffeeCardContent, CoffeeCardImg, CoffeeMain, CoffeePrice } from "./styles";

interface CoffeeCardProps {
   id: number,
   image: string;
   tags: string[];
   title: string;
   description: string;
   price: number;

}

export function CoffeeCard() {
   const [coffeeCards, setCoffeeCards] = useState<CoffeeCardProps[]>([])
   async function loadCoffeeCard() {
      const response = await fetch('http://localhost:3333/coffeeCard')
      const data = await response.json();
      console.log(data);
      

      setCoffeeCards(data);
   }
   useEffect(() => {
      loadCoffeeCard();
   }, [])

   return (
      <CoffeeMain>
         {coffeeCards.map(coffee => {
            return (
                     
               <CoffeeCardContainer key={coffee.id}>
                  
                  <CoffeeCardImg src={coffee.image} alt=""/>

                  <CardTags>
                     {coffee.tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                     ))}
                  </CardTags>

                  <CardTitle>{coffee.title}</CardTitle>

                  <CardDescription>{coffee.description}</CardDescription>

                  <CoffeeCardContent>
                     <CoffeePrice>
                        <span>R$</span>
                        <span>{coffee.price.toFixed(2)}</span>
                     </CoffeePrice>
                  </CoffeeCardContent>

               </CoffeeCardContainer>
            )
         })}

      </CoffeeMain>

   )
}