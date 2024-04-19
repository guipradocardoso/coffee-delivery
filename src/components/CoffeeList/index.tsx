import { CoffeeCard } from "../CoffeeCard";
import { CoffeeListContainer, CoffeeListHeader } from "./styles";

export function CoffeeList() {
   return (
      <CoffeeListContainer>
         <CoffeeListHeader>
            <h2>Nossos cafés</h2>
         </CoffeeListHeader>
         
         <CoffeeCard/>

      </CoffeeListContainer>
   )
}