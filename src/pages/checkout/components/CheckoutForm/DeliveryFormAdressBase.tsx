import { Input } from '@/components/Input'
import { DeliveyFormAdressContainer } from './styles'

export default function DeliveryFormAdressBase() {
  return (
    <DeliveyFormAdressContainer>
      <Input type="number" placeholder="CEP" className="cep" />
      <Input type="text" placeholder="Rua" className="street" />
      <Input type="number" placeholder="Número" />
      <Input type="number" placeholder="Complemento" className="complement" />
      <Input type="text" placeholder="Bairro" />
      <Input type="text" placeholder="Cidade" />
      <Input type="text" placeholder="UF" />
    </DeliveyFormAdressContainer>
  )
}
