import Image from 'next/image'
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styles'
import { RegularText } from '@/components/Typography'
import { QuantityInput } from '@/components/QuantityInput'
import { Trash } from 'phosphor-react'
import coffeImage from '../../../../../public/coffees/tradicional.png'

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <Image src={coffeImage} alt="" />
        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>
          <ActionsContainer>
            <QuantityInput size="small" />
            <RemoveButton>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
        <p>R$ 9,90</p>
      </div>
    </CoffeeCartCardContainer>
  )
}
