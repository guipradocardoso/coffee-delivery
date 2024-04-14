import { HeaderActions, HeaderCart, HeaderContainer, HeaderContent, HeaderLocation } from './styles'
import logoHeader from '../../assets/logo.svg'
import { ShoppingCart, MapPin } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

export function Header() {
   const theme = useTheme()
   return(
      <HeaderContainer>
         <HeaderContent>
            <img src={logoHeader} alt="" />

            <HeaderActions>
               <HeaderLocation>
                  <MapPin size={22} weight='fill' color={theme['purple-500']} />
                  <span>Porto Alegre, RS</span>
               </HeaderLocation>

               <HeaderCart >
                  <ShoppingCart size={22} weight='fill' color={theme['yellow-500']}/>
               </HeaderCart>

            </HeaderActions>
         </HeaderContent>
      </HeaderContainer>
   )

}