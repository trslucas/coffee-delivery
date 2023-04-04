/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors['base-background']};
  justify-content: space-between;
  height: 6.5rem;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
`
interface HeaderButtonProps {
  variant: 'purple' | 'yellow'
}

export const HeaderItemsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
export const Button = styled.button<HeaderButtonProps>`
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
  font-size: ${({ theme }) => theme.textSizes['text-regular-s']};

  ${({ variant, theme }) => css`
    background: ${theme.colors[`brand-${variant}-light`]};
    color: ${theme.colors[`brand-${variant}-dark`]};
  `}

  ${({ variant, theme }) =>
    variant === 'purple' &&
    css`
      svg {
        color: ${theme.colors[`brand-purple`]};
      }
    `}
`

export const LocationButton = styled(Button)`
  background: #ebe5f9;
  display: flex;
  align-items: center;
`

export const CartButton = styled(Button)``

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
  border-radius: 6px;
  padding: 0.5rem 0.4rem;
  cursor: pointer;
`
