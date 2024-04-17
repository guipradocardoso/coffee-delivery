import { HeaderActions, HeaderCart, HeaderContainer, HeaderImage, HeaderLocation } from './styles'
import logoHeader from '../../assets/logo.svg'
import { ShoppingCart, MapPin } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

export function Header() {
   const theme = useTheme()
   return(
      <HeaderContainer>
         <HeaderImage>
            <img src={logoHeader} alt="" />
         </HeaderImage>

         <HeaderActions>
            <HeaderLocation>
               <MapPin size={22} weight='fill' color={theme['purple-500']} />
               <span>Porto Alegre, RS</span>
            </HeaderLocation>

            <HeaderCart >
               <ShoppingCart size={22} weight='fill' color={theme['yellow-900']}/>
            </HeaderCart>

         </HeaderActions>
      </HeaderContainer>
   )

}