import styled from 'styled-components'

export const DeliveryCheckoutInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 25rem;
  margin-left: 3rem;
`
export const CheckoutInfosContainer = styled.div`
  background: ${({ theme }) => theme.colors['base-card']};
  padding: 2rem;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
