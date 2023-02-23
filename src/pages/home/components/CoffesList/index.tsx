import { coffees } from '@/data/coffees'
import CoffeeCard from '../CoffeCard'
import { CoffesContainer, CoffesListContainer } from './styles'

export default function CoffesList() {
  return (
    <CoffesContainer className="container">
      <h2>Nossos cafés</h2>
      <CoffesListContainer>
        {coffees.map((coffee) => {
          return <CoffeeCard key={coffee.id} coffee={coffee} />
        })}
      </CoffesListContainer>
    </CoffesContainer>
  )
}
