import { Minus, Plus } from "phosphor-react";
import { QuantityInputContainer } from "./styles";

interface QuantityInputProps {
   quantity: number
   incrementQuantity: () => void
   decrementQuantity: () => void
}


export function QuantityInput({  
   quantity, 
   incrementQuantity, 
   decrementQuantity,
}: QuantityInputProps)  {
   
   return (
      <QuantityInputContainer>
         <button onClick={decrementQuantity}>
            <Minus size={14} weight='fill'/>
         </button>

         <span>{quantity}</span>

         <button onClick={incrementQuantity}>
            <Plus size={14} weight='fill'/>
         </button>
      </QuantityInputContainer>
   )
}