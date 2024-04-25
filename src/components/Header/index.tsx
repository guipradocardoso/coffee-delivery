import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'
import logoHeader from '../../assets/logo.svg'
import { ShoppingCart, MapPin } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import { NavLink } from 'react-router-dom'

export function Header() {
   const theme = useTheme()
   return(
      <HeaderContainer>
         <div className='container'>
            <NavLink to="/">
               <img src={logoHeader} alt="" />
            </NavLink>

            <HeaderButtonsContainer>
               <HeaderButton variant='purple'>
                  <MapPin size={22} weight='fill' color={theme['purple-500']} />
                  Porto Alegre, RS
               </HeaderButton>

               <NavLink to="/checkoutOrder">
                  <HeaderButton variant='yellow'>
                     <ShoppingCart size={22} weight='fill' color={theme['yellow-900']}/>
                  </HeaderButton>
               </NavLink>
            </HeaderButtonsContainer>
         </div>
      </HeaderContainer>
   )

}