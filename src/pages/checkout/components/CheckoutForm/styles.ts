import styled from 'styled-components'

export const DeliveryFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const DeliveryForm = styled.form`
  background: ${({ theme }) => theme.colors['base-card']};
  padding: 2rem;
  border-radius: 8px;
`
export const DeliveryFormTitle = styled.div`
  display: flex;
  gap: 1rem;
`

export const DeliveryFormTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: baseline;
`
export const DeliveryFormAdress = styled.div`
  margin-top: 2rem;
`
export const DeliveryPaymentType = styled.div`
  padding: 2rem;
  background: ${({ theme }) => theme.colors['base-card']};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 8px;
`
export const DeliveyFormAdressContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.5rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }
`
export const PaymentMethodOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
`
