import UseCart from '@/hooks/useCart'
import { CoffeeCartCard } from '../CoffeeCartCard'
import { PaymentResume } from './PaymentResume'
import { SelectedCoffeesContainer } from './styles'

export function SelectedCoffees() {
  const { cartItems } = UseCart()
  return (
    <SelectedCoffeesContainer>
      {cartItems.map((cartItem) => {
        return <CoffeeCartCard key={cartItem.id} coffee={cartItem} />
      })}
      <PaymentResume />
    </SelectedCoffeesContainer>
  )
}
