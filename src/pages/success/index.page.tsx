import { RegularText, TextTitle } from '@/components/Typography'
import { SuccessContainer } from './styles'
import { OrderInfos } from './OrderInfos'

export default function Success() {
  return (
    <SuccessContainer className="container">
      <div>
        <TextTitle size="l" color="title">
          Uhu! Pedido Confirmado
        </TextTitle>
        <RegularText>
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>
      <OrderInfos />
    </SuccessContainer>
  )
}
