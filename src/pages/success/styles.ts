import styled from 'styled-components'

export const SuccessContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;

  h1 {
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }
`
export const OrderInfosContainer = styled.div`
  display: flex;
  gap: 3.5rem;
  aling-items: center;
  justify-content: space-between;
  width: 100%;
`

export const InfosContainer = styled.div`
  display: flex;
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  background: ${({ theme }) => theme.colors['base-background']};
  min-width: 32rem;
  position: relative;
  flex-direction: column;
  gap: 2rem;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    inset: -1px;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`
