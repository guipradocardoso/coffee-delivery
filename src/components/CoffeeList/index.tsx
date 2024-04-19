import { CoffeeCard } from "../CoffeeCard";
import { coffeeCard } from '../../../server.json'
import { CoffeeListContainer, CoffeeListContent, CoffeeListHeader } from "./styles";

export function CoffeeList() {
   return (
      <CoffeeListContainer>
         <CoffeeListHeader>
            <h2>Nossos cafés</h2>
         </CoffeeListHeader>
         <CoffeeListContent>
               {coffeeCard.map((coffee) => (
                     <CoffeeCard key={coffee.id} {...coffee}/>
               ))}
         </CoffeeListContent>

      </CoffeeListContainer>
   )
}