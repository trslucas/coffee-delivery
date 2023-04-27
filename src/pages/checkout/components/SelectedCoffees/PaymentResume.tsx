import { RegularText } from '@/components/Typography'
import { PaymentResumeContainer } from './styles'
import { Button } from '@/components/Button'
import useCart from '@/hooks/useCart'
import { formatMoney } from '@/utils/formatMoney'

const DELIVERY_PRICE = 3.5

export function PaymentResume() {
  const { cartItensTotalPrice, cartQuantity } = useCart()
  const cartTotalPrice = cartItensTotalPrice + DELIVERY_PRICE

  const deliveryPrice = formatMoney(DELIVERY_PRICE)
  const priceFormatted = formatMoney(cartItensTotalPrice)
  const finalPriceFormatted = formatMoney(cartTotalPrice)

  return (
    <PaymentResumeContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R${priceFormatted}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R${deliveryPrice}</RegularText>
      </div>
      <div>
        <RegularText weight={700} color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight={700} color="subtitle" size="l">
          {finalPriceFormatted}
        </RegularText>
      </div>
      <Button
        text="Confirmar Pedido"
        type="submit"
        disabled={cartQuantity <= 0}
      />
    </PaymentResumeContainer>
  )
}
