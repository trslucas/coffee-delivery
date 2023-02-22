import Link from 'next/link'
import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  ActionsContainer,
  CartButton,
  HeaderContainer,
  LocationButton,
} from './styles'

import BrandCoffe from '../../assets/Logo.png'
import Image from 'next/image'

export default function Header() {
  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={BrandCoffe} alt="" />
      </Link>
      <ActionsContainer>
        <LocationButton>
          <MapPin size={20} weight="fill" />
          Rio Grande do Sul
        </LocationButton>
        <CartButton type="button">
          <ShoppingCart size={20} weight="fill" />
        </CartButton>
      </ActionsContainer>
    </HeaderContainer>
  )
}
