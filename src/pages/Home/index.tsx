import { CoffeeList } from "../../components/CoffeeList";
import { Header } from "../../components/Header";
import { HomeSummary } from "../../components/HomeSummary";

export function Home() {
   return (
      <div>
         <Header/>
         <HomeSummary/>
         <CoffeeList/>
      </div>
   )
}