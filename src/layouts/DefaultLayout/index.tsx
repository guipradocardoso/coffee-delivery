import { Outlet } from "react-router-dom";
import { LayoutCountainer } from "./styles";
import { Header } from "../../components/Header";

export function DefaultLayout() {
   return (
      <LayoutCountainer>
         <Header/>
         <Outlet/>
      </LayoutCountainer>
   )
}