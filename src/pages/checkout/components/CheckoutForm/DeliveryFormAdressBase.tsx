import { Input } from '@/components/Input'
import { DeliveyFormAdressContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const checkoutFormSchema = z.object({
  cep: z.number().min(8).max(8),
  street: z.string(),
  number: z.number(),
  complement: z.string(),
  neighborhood: z.string(),
  city: z.string(),
  uf: z.string(),
})

type CheckoutFormInputs = z.infer<typeof checkoutFormSchema>

export default function DeliveryFormAdressBase() {
  const { register, handleSubmit } = useForm<CheckoutFormInputs>({
    resolver: zodResolver(checkoutFormSchema),
  })

  function handleAddInfos(data: CheckoutFormInputs) {
    console.log(data)
  }

  return (
    <DeliveyFormAdressContainer onSubmit={handleSubmit(handleAddInfos)}>
      <Input
        type="number"
        placeholder="CEP"
        className="cep"
        {...register('cep')}
      />
      <Input
        type="text"
        placeholder="Rua"
        className="street"
        {...register('street')}
      />
      <Input type="number" placeholder="Número" {...register('complement')} />
      <Input type="number" placeholder="Complemento" className="complement" />
      <Input type="text" placeholder="Bairro" {...register('neighborhood')} />
      <Input type="text" placeholder="Cidade" {...register('city')} />
      <Input type="text" placeholder="UF" {...register('uf')} />
    </DeliveyFormAdressContainer>
  )
}
