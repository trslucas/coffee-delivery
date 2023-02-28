import { ShoppingCart } from 'phosphor-react'
import {
  CoffeCard,
  CoffeCardCartInfos,
  CoffeCardInfos,
  CoffeCardInfosAction,
  CoffeCardInfosCartButton,
  CoffeCardInfosPrice,
  Description,
  Name,
  Tags,
} from './styles'
import Image from 'next/image'
import { formatMoney } from '@/utils/formatMoney'
import { RegularText, TextTitle } from '@/components/Typography'

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
        <Name>{coffee.name}</Name>
        <Description>{coffee.description}</Description>
        <CoffeCardCartInfos>
          <CoffeCardInfosPrice>
            <RegularText size="s">R$</RegularText>
            <TextTitle size="m" color="text" as="strong">
              {formattedPrice}
            </TextTitle>
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
