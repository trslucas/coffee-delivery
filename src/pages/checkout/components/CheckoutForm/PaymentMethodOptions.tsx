import { Bank, CreditCard, Money } from 'phosphor-react'
import { PaymentMethodInput } from '../PaymentMethodInput'
import { PaymentMethodOptionsContainer } from './styles'
import { useFormContext } from 'react-hook-form'
import { RegularText } from '@/components/Typography'

const type = {
  Crédito: {
    label: 'Cartão de Cŕedito',
    icon: <CreditCard size={16} />,
  },

  Débito: {
    label: 'Cartão de Débito',
    icon: <Bank size={16} />,
  },

  Dinheiro: {
    label: 'Dinheiro',
    icon: <Money size={16} />,
  },
}

export function PaymentMethodOptions() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const paymentMethodError = errors?.paymentInput?.message as unknown as string
  return (
    <PaymentMethodOptionsContainer>
      {Object.entries(type).map(([key, { label, icon }]) => (
        <PaymentMethodInput
          key={label}
          id={key}
          icon={icon}
          label={label}
          value={key}
          {...register('paymentInput')}
        />
      ))}
      {paymentMethodError && <RegularText>{paymentMethodError}</RegularText>}
    </PaymentMethodOptionsContainer>
  )
}
