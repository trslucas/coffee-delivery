import { PaymentMethodContainer } from './styles'
import { ReactNode } from 'react'
import { RegularText } from '@/components/Typography'

interface PaymentMethodInputProps {
  icon: ReactNode
  paymentType: string
}

export function PaymentMethodInput({
  paymentType,
  icon,
}: PaymentMethodInputProps) {
  return (
    <PaymentMethodContainer>
      {icon}
      <RegularText size="s">{paymentType}</RegularText>
    </PaymentMethodContainer>
  )
}
