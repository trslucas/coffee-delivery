import { TextTitle } from '@/components/Typography'
import {
  CheckoutInfosContainer,
  DeliveryCheckoutInfosContainer,
} from './styles'
import { SelectedCoffees } from '../SelectedCoffees'

export default function CheckoutInfos() {
  return (
    <DeliveryCheckoutInfosContainer>
      <TextTitle>Cafés Selecionados</TextTitle>
      <CheckoutInfosContainer>
        <SelectedCoffees />
      </CheckoutInfosContainer>
    </DeliveryCheckoutInfosContainer>
  )
}
