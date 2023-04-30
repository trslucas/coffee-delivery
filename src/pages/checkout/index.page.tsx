import { CheckoutForm } from './components/CheckoutForm'
import * as z from 'zod'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckoutOrderContainer } from './styles'
import { SelectedCoffees } from './components/SelectedCoffees'
import { useRouter } from 'next/router'
import useCart from '@/hooks/useCart'

const checkoutFormSchema = z.object({
  cep: z.string().min(1, 'Informe o CEP'),
  street: z.string().min(1, 'Informe a Rua'),
  houseNumber: z.string().min(1, 'Informe o Número'),
  complement: z.string(),
  district: z.string().min(1, 'Informe o Bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  uf: z.string().min(1, 'Informe a UF'),
  paymentInput: z.enum(['Crédito', 'Débito', 'Dinheiro'], {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})

export type OrderData = z.infer<typeof checkoutFormSchema>
type CheckoutFormOrderData = OrderData

export default function Checkout() {
  const { clearCartItem } = useCart()
  const confirmOrderForm = useForm<CheckoutFormOrderData>({
    resolver: zodResolver(checkoutFormSchema),
  })
  const { handleSubmit } = confirmOrderForm

  const router = useRouter()
  function handleConfirmOrder(data: CheckoutFormOrderData) {
    console.log(data)
    router.push({
      pathname: '/success',
      query: data,
    })
    clearCartItem()
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CheckoutOrderContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CheckoutForm />
        <SelectedCoffees />
      </CheckoutOrderContainer>
    </FormProvider>
  )
}
