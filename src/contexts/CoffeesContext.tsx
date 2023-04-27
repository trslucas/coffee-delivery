import { Coffee } from '@/pages/home/components/CoffeCard'
import produce from 'immer'
import { ReactNode, createContext, useEffect, useState } from 'react'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  addCoffeeToCart: (coffee: CartItem) => void
  changeCartIntemQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) => void
  removeCartItem: (cartItemId: number) => void
  cartItensTotalPrice: number
}

interface CartContextProviderProps {
  children: ReactNode
}

const COFFEE_ITEMS_STORAGE_KEY = 'coffeeDelivery:cartItems'

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    const storedStateJSON = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)
    if (storedStateJSON) {
      const storedItem = JSON.parse(storedStateJSON)
      setCartItems(storedItem)
    }
  }, [])

  const cartQuantity = cartItems.length

  const cartItensTotalPrice = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity
      }
    })

    setCartItems(newCart)
  }

  function changeCartIntemQuantity(
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) {
    const newCartItem = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart]
        draft[coffeeExistsInCart].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })
    setCartItems(newCartItem)
  }

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (coffeeExistsInCart >= 0) {
        draft.splice(coffeeExistsInCart, 1)
      }
    })
    setCartItems(newCart)
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cartItems)
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, stateJSON)
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCoffeeToCart,
        cartQuantity,
        changeCartIntemQuantity,
        removeCartItem,
        cartItensTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
