import { TextTitle } from '@/components/Typography'
import {
  CheckoutFormContainer,
  FormSectionContainer,
  PaymentMethodOptionsContainer,
} from './styles'
import { SectionTitle } from '../SectionTitle'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useTheme } from 'styled-components'
import { AddressForm } from './AddressForm'
import { PaymentMethodInput } from '../PaymentMethodInput'

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
        <PaymentMethodOptionsContainer>
          <PaymentMethodInput
            paymentType="Dinheiro"
            icon={<Money size={18} />}
          />
          <PaymentMethodInput
            paymentType="Crédito"
            icon={<CreditCard size={18} />}
          />
          <PaymentMethodInput paymentType="Débito" icon={<Bank size={18} />} />
        </PaymentMethodOptionsContainer>
      </FormSectionContainer>
    </CheckoutFormContainer>
  )
}
