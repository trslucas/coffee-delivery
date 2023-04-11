import Link from 'next/link'
import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  ActionsContainer,
  CartButton,
  HeaderContainer,
  HeaderItemsContainer,
  LocationButton,
} from './styles'

import BrandCoffe from '../../assets/Logo.png'
import Image from 'next/image'
import useCart from '@/hooks/useCart'

export default function Header() {
  const { cartQuantity } = useCart()
  return (
    <HeaderContainer>
      <HeaderItemsContainer className="container">
        <Link href="/">
          <Image src={BrandCoffe} alt="" />
        </Link>
        <ActionsContainer>
          <LocationButton variant="purple">
            <MapPin size={20} weight="fill" />
            Rio Grande do Sul
          </LocationButton>
          <Link href={'/checkout'}>
            <CartButton type="button" variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </CartButton>
          </Link>
        </ActionsContainer>
      </HeaderItemsContainer>
    </HeaderContainer>
  )
}
