/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
  width: 80%;
  padding: 3rem 6rem;
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
  min-width: 2.3rem;
  border: none;
  gap: 4px;
  height: 2.3rem;
  cursor: pointer;
  border-radius: 6px;
`

export const LocationButton = styled(Button)`
  background: #ebe5f9;
  display: flex;
  align-items: center;

  svg {
    color: #c47f17;
  }
`

export const CartButton = styled(Button)`
  background: #f1e9c9;
  svg {
    color: #c47f17;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  width: 100%;
  background: purple;
  border-radius: 6px;
  padding: 0.5rem 0.4rem;
  cursor: pointer;
`
