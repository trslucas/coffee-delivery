import { TextTitle } from '@/components/Typography'
import { CheckoutFormContainer, FormSectionContainer } from './styles'
import { SectionTitle } from '../SectionTitle'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { AddressForm } from './AddressForm'
import { PaymentMethodOptions } from './PaymentMethodOptions'

export function CheckoutForm() {
  const { colors } = useTheme()
  return (
    <CheckoutFormContainer>
      <TextTitle size="xs" color="subtitle">
        Complete seu pedido
      </TextTitle>

      <FormSectionContainer>
        <SectionTitle
          title="Endereço de entrega"
          subtitle="Informe o endereço onde deseja seu pedido"
          icon={<MapPinLine size={22} color={colors['brand-yellow-dark']} />}
        />
        <AddressForm />
      </FormSectionContainer>

      <FormSectionContainer>
        <SectionTitle
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar size={22} color={colors['brand-purple']} />}
        />
        <PaymentMethodOptions />
      </FormSectionContainer>
    </CheckoutFormContainer>
  )
}
