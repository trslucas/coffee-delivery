import { CoffeeCartCard } from '../CoffeeCartCard'
import { PaymentResume } from './PaymentResume'
import { SelectedCoffeesContainer } from './styles'

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <CoffeeCartCard />
      <CoffeeCartCard />
      <CoffeeCartCard />

      <PaymentResume />
    </SelectedCoffeesContainer>
  )
}
