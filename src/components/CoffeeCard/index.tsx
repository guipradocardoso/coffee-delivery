import { useEffect, useState } from "react";
import { CardDescription, CardTags, CardTitle, CoffeeCardBuy, CoffeeCardContainer, CoffeeCardImg, CoffeeMain, CoffeeOrder, CoffeeOrderButton, CoffeePrice } from "./styles";
import { QuantityInput } from "../QuantityInput";
import { ShoppingCartSimple } from "phosphor-react";
import { useTheme } from "styled-components";

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
   const [quantity, setQuantity] = useState<number>(1)
  
   const theme = useTheme()
   
   
   async function loadCoffeeCard() {
      const response = await fetch('http://localhost:3333/coffeeCard')
      const data = await response.json();
      setCoffeeCards(data);
   }
   useEffect(() => {
      loadCoffeeCard();
   }, [])

   function incrementQuantity() {
      setQuantity((prevQuantity) => prevQuantity + 1)
   }

   function decrementQuantity() {
      if (quantity > 0)
      setQuantity((prevQuantity) => prevQuantity - 1)
   }

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

                  <CoffeeCardBuy>
                     <CoffeePrice>
                        <span>R$</span>
                        <span>{coffee.price.toFixed(2)}</span>
                     </CoffeePrice>

                     <CoffeeOrder >
                        <QuantityInput
                           quantity={quantity}
                           incrementQuantity={incrementQuantity}
                           decrementQuantity={decrementQuantity}
                        />

                        <CoffeeOrderButton >
                           <ShoppingCartSimple
                              weight="fill"
                              size={22}
                              color={theme["gray-300"]}
                           />   
                        </CoffeeOrderButton>
                     </CoffeeOrder>


                  </CoffeeCardBuy>

               </CoffeeCardContainer>
            )
         })}

      </CoffeeMain>

   )
}