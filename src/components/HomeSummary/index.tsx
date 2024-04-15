import { HomeSummaryContainer, HomeSummaryContent, HomeSummaryItems, HomeSummaryTitle, Items } from "./styles";

import logoHome from '../../assets/logo-home.svg'
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import { useTheme } from "styled-components";

export function HomeSummary() {
   const theme = useTheme()

   return (
      <HomeSummaryContainer>
         <HomeSummaryContent>
            <HomeSummaryTitle>
                  <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                  <span>Com o Coffee Delivery você recebe seu café onde estiver, 
                     a qualquer hora
                  </span>
               <HomeSummaryItems>
                  <Items>
                     <ShoppingCart size={16} weight="fill" style={{background: theme["yellow-900"]}}/>
                     <span>Compra simples e segura</span>
                  </Items>

                  <Items>
                     <Package size={16} weight="fill" style={{background: theme["gray-700"]}}/>
                     <span>Embalagem mantém o café intacto</span>
                  </Items>

                  <Items>
                     <Timer size={16} weight="fill" style={{background: theme["yellow-500"]}}/>
                     <span>Entrega rápida e rastreada</span>
                  </Items>

                  <Items>
                     <Coffee size={16} weight="fill" style={{background: theme["purple-500"]}}/>
                     <span>O café chega fresquinho até você</span>
                  </Items>

               </HomeSummaryItems>
            </HomeSummaryTitle>

         </HomeSummaryContent>   
            
         <img src={logoHome} alt="" />

      </HomeSummaryContainer>
   )
}