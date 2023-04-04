import { Bank, CreditCard, Money } from 'phosphor-react'
import { PaymentMethodInput } from '../PaymentMethodInput'
import { PaymentMethodOptionsContainer } from './styles'

export function PaymentMethodOptions() {
  return (
    <PaymentMethodOptionsContainer>
      <PaymentMethodInput
        paymentType="Cartão de crédito"
        icon={<CreditCard size={16} />}
      />
      <PaymentMethodInput
        paymentType="Cartão de débito"
        icon={<Bank size={16} />}
      />
      <PaymentMethodInput paymentType="Dinheiro" icon={<Money size={16} />} />
    </PaymentMethodOptionsContainer>
  )
}
