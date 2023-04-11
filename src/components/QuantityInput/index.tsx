import { Minus, Plus } from 'phosphor-react'
import { IconWrapper, QuantityInputContainer } from './styles'
interface QuantityInputProps {
  size?: 'medium' | 'small'
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
}

export function QuantityInput({
  size = 'medium',
  onIncrease,
  onDecrease,
  quantity,
}: QuantityInputProps) {
  const invalidNumber = quantity <= 1

  return (
    <QuantityInputContainer size={size}>
      <IconWrapper onClick={onDecrease} disabled={invalidNumber}>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />

      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
