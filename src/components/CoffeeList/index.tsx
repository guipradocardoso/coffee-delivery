import CoffeeCard from "../CoffeeCard";
import {
  CoffeeListContainer,
  CoffeeListContent,
  CoffeeListHeader,
} from "./styles";

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <CoffeeListHeader>
        <h2>Nossos cafés</h2>
      </CoffeeListHeader>
      <CoffeeListContent>
        <CoffeeCard />
      </CoffeeListContent>
    </CoffeeListContainer>
  );
}
