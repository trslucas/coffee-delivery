import { RegularText, TextTitle } from '@/components/Typography'
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
`

export const CoffeCardCartInfos = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`

export const Name = styled(TextTitle).attrs({
  size: 's',
  color: 'subtitle',
  weight: 700,
})`
  margin-bottom: 0.5rem;
`

export const Description = styled(RegularText).attrs({
  size: 's',
  color: 'label',
})`
  margin-bottom: 2rem;
`

export const CoffeCardInfosPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;

  p {
    line-height: 0.75rem;
  }
`

export const CoffeCardInfosCartButton = styled.div`
  display: flex;
  width: 7.5rem;
  background: transparent;
  border: none;

  > button {
    width: 2.375rem;
    height: 2.375rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.colors['brand-purple-dark']};
    color: ${({ theme }) => theme.colors['base-card']};
    border-radius: 6px;
    margin-left: 0.3rem;
    transition: 0.4s;

    &:hover {
      background: ${({ theme }) => theme.colors['brand-purple']};
    }
  }
`
