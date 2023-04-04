import { TextTitle } from '@/components/Typography'
import {
  DeliveryFormContainer,
  DeliveryForm,
  DeliveryFormAdress,
  DeliveryPaymentType,
} from './styles'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'
import DeliveryFormAdressBase from './DeliveryFormAdressBase'
import { SectionTitle } from '../SectionTitle'
import { PaymentMethodOptions } from './PaymentMethodOptions'

export function CheckoutForm() {
  const { colors } = useTheme()

  return (
    <DeliveryFormContainer className=".container">
      <TextTitle>Complete seu pedido</TextTitle>
      <DeliveryForm>
        <SectionTitle
          title="Endereço de Entrega!"
          subtitle="Informe o endereço de onde deseja receber seu pedido"
          icon={<MapPinLine size={22} color={colors['brand-yellow-dark']} />}
        />

        <DeliveryFormAdress>
          <DeliveryFormAdressBase />
        </DeliveryFormAdress>
      </DeliveryForm>
      <DeliveryPaymentType>
        <SectionTitle
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar size={24} color={colors['brand-purple']} />}
        />
        <PaymentMethodOptions />
      </DeliveryPaymentType>
    </DeliveryFormContainer>
  )
}
