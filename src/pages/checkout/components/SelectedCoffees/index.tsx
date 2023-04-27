import useCart from '@/hooks/useCart'
import { CoffeeCartCard } from '../CoffeeCartCard'
import { PaymentResume } from './PaymentResume'
import { DetailsContainer, SelectedCoffeesContainer } from './styles'
import { TextTitle } from '@/components/Typography'

export function SelectedCoffees() {
  const { cartItems } = useCart()
  return (
    <SelectedCoffeesContainer>
      <TextTitle size="xs" color="subtitle">
        Cafés Selecionados
      </TextTitle>
      <DetailsContainer>
        {cartItems.map((cartItem) => (
          <CoffeeCartCard key={cartItem.id} coffee={cartItem} />
        ))}
        <PaymentResume />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}
