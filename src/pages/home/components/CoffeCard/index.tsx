import { ShoppingCart } from 'phosphor-react'
import {
  CoffeCard,
  CoffeCardCartInfos,
  CoffeCardInfos,
  CoffeCardInfosAction,
  CoffeCardInfosCartButton,
  CoffeCardInfosPrice,
  Tags,
} from './styles'
import Image from 'next/image'
import { formatMoney } from '@/utils/formatMoney'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  price: number
  photo: string
}

interface CoffeeProps {
  coffee: Coffee
}

export default function CoffeeCard({ coffee }: CoffeeProps) {
  const formattedPrice = formatMoney(coffee.price)
  return (
    <CoffeCard>
      <Image src={`/coffees/${coffee.photo}`} alt="" width={120} height={120} />
      <CoffeCardInfos>
        <Tags>
          {coffee.tags.map((tag) => {
            return <span key={`${coffee.id}${tag}`}>{tag}</span>
          })}
        </Tags>
        <strong>{coffee.name}</strong>
        <p>{coffee.description}</p>
        <CoffeCardCartInfos>
          <CoffeCardInfosPrice>
            <span>R$</span> {formattedPrice}
          </CoffeCardInfosPrice>
          <CoffeCardInfosAction> - 1 + </CoffeCardInfosAction>
          <CoffeCardInfosCartButton>
            <ShoppingCart size={22} />
          </CoffeCardInfosCartButton>
        </CoffeCardCartInfos>
      </CoffeCardInfos>
    </CoffeCard>
  )
}
