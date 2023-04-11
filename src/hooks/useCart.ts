import { CartContext } from '@/contexts/CoffeesContext'
import { useContext } from 'react'

export default function UseCart() {
  const context = useContext(CartContext)
  return context
}
