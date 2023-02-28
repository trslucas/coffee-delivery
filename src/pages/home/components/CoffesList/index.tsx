import { coffees } from '@/data/coffees'
import CoffeeCard from '../CoffeCard'
import { CoffesContainer, CoffesListContainer } from './styles'
import { TextTitle } from '@/components/Typography'

export default function CoffesList() {
  return (
    <CoffesContainer className="container">
      <TextTitle size="l" color="subtitle">
        Nossos cafés
      </TextTitle>
      <CoffesListContainer>
        {coffees.map((coffee) => {
          return <CoffeeCard key={coffee.id} coffee={coffee} />
        })}
      </CoffesListContainer>
    </CoffesContainer>
  )
}
