import { CheckoutForm } from './components/CheckoutForm'
import CheckoutInfos from './components/CheckoutInfos'
import { CheckoutContainer } from './styles'

export default function Checkout() {
  return (
    <CheckoutContainer className="container">
      <CheckoutForm />
      <CheckoutInfos />
    </CheckoutContainer>
  )
}
