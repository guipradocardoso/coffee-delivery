import { NavLink } from "react-router-dom";
import { Button } from "../../../../components/Button";
import { RegularText } from "../../../../components/Typography";
import { ConfirmationSectionContainer } from "./styles";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";

const DELIVERY_PRICE = 3.5;

export function ConfirmationSection() {
   const { cartItemsTotal, cartQuantity} = useCart();
   const cartTotal = DELIVERY_PRICE + cartItemsTotal;

   const formattedItemsTotal = formatMoney(cartItemsTotal);
   const formattedCartTotal = formatMoney(cartTotal);
   const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE);
   return (
      <ConfirmationSectionContainer>
         <div>
            <RegularText size="s">Total de itens</RegularText>
            <RegularText>R$ {formattedItemsTotal}</RegularText>
         </div>
         <div>
            <RegularText size="s">Entrega</RegularText>
            <RegularText>R$ {formattedDeliveryPrice}</RegularText>
         </div>
         <div>
            <RegularText weight="700" color="subtitle">Total</RegularText>
            <RegularText weight="700" color="subtitle">R$ {formattedCartTotal}</RegularText>
         </div>
         
            <Button text="Confirmar Pedido" disabled={cartQuantity <= 0} type="submit"/>
      </ConfirmationSectionContainer>
   )
}