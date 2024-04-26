import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'
import logoHeader from '../../assets/logo.svg'
import { ShoppingCart, MapPin } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

export function Header() {
   const { cartQuantity } = useCart()
   return(
      <HeaderContainer>
         <div className='container'>
            <NavLink to="/">
               <img src={logoHeader} alt="" />
            </NavLink>

            <HeaderButtonsContainer>
               <HeaderButton variant='purple'>
                  <MapPin size={20} weight='fill'/>
                  Porto Alegre, RS
               </HeaderButton>

               <NavLink to="/checkoutOrder">
                  <HeaderButton variant='yellow'>
                     {cartQuantity >= 1 && <span>{cartQuantity}</span>}
                     <ShoppingCart size={22} weight='fill'/>
                  </HeaderButton>
               </NavLink>
            </HeaderButtonsContainer>
         </div>
      </HeaderContainer>
   )

}