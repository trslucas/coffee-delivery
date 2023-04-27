import { Input } from '@/components/Input'
import { AddressFormContainer } from './styles'
import { useFormContext } from 'react-hook-form'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function AddressForm() {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType
  return (
    <AddressFormContainer>
      <Input
        placeholder="CEP"
        type="number"
        className="cep"
        {...register('cep')}
        error={errors.cep?.message}
      />
      <Input
        placeholder="Rua"
        className="street"
        {...register('street')}
        error={errors.street?.message}
      />
      <Input
        placeholder="Número"
        type="number"
        {...register('houseNumber')}
        error={errors.houseNumber?.message}
      />
      <Input
        placeholder="Complemento"
        className="complement"
        type="text"
        rightText="Opcional"
        {...register('complement')}
        error={errors.complement?.message}
      />
      <Input
        placeholder="Bairro"
        type="text"
        {...register('district')}
        error={errors.district?.message}
      />
      <Input
        placeholder="Cidade"
        type="text"
        {...register('city')}
        error={errors.city?.message}
      />
      <Input
        placeholder="UF"
        type="text"
        {...register('uf')}
        error={errors.uf?.message}
      />
    </AddressFormContainer>
  )
}
