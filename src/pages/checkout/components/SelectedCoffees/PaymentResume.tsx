import { RegularText } from '@/components/Typography'
import { PaymentResumeContainer } from './styles'
import { Button } from '@/components/Button'

export function PaymentResume() {
  return (
    <PaymentResumeContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ 9,90</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ 3,50</RegularText>
      </div>
      <div>
        <RegularText weight={700} color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight={700} color="subtitle" size="l">
          33,50
        </RegularText>
      </div>
      <Button text={'Confirar Pedido'} />
    </PaymentResumeContainer>
  )
}
