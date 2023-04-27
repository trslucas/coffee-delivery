import Image from 'next/image'
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styles'
import { RegularText } from '@/components/Typography'
import { QuantityInput } from '@/components/QuantityInput'
import { Trash } from 'phosphor-react'
import useCart from '@/hooks/useCart'
import { CartItem } from '@/contexts/CoffeesContext'
import { formatMoney } from '@/utils/formatMoney'

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { changeCartIntemQuantity, removeCartItem } = useCart()
  const coffeeTotalPrice = coffee.price * coffee.quantity
  const formattedPrice = formatMoney(coffeeTotalPrice)

  function handleDelete() {
    removeCartItem(coffee.id)
  }

  function handleIncrease() {
    changeCartIntemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeCartIntemQuantity(coffee.id, 'decrease')
  }

  return (
    <CoffeeCartCardContainer>
      <div>
        <Image
          src={`/coffees/${coffee.photo}`}
          width={120}
          height={120}
          alt=""
        />
        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>
          <ActionsContainer>
            <QuantityInput
              size="small"
              quantity={coffee.quantity}
              onDecrease={handleDecrease}
              onIncrease={handleIncrease}
            />
            <RemoveButton onClick={handleDelete}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
        <p>{formattedPrice}</p>
      </div>
    </CoffeeCartCardContainer>
  )
}
