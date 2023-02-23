import styled from 'styled-components'

export const CoffeCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1.25rem;
  padding-top: 0;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  margin-left: 2rem;

  background: ${({ theme }) => theme.colors['base-card']};

  img {
    margin-top: -1.25rem;
    width: 7.5rem;
    height: 7.5rem;
  }
`

export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
  gap: 4px;
  font-size: 0.75rem;

  span {
    background: ${({ theme }) => theme.colors['brand-yellow-light']};
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
    font-size: ${({ theme }) => theme.textSizes['components-tag']};
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    font-weight: 700;
  }
`

export const CoffeCardInfos = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 1rem;

  p {
    font-size: 0.9rem;
  }
`

export const CoffeCardCartInfos = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`

export const CoffeCardInfosPrice = styled.div``

export const CoffeCardInfosAction = styled.div`
  background: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 3rem;
`

export const CoffeCardInfosCartButton = styled.button`
  background: transparent;
  border: none;
`
