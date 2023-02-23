/* eslint-disable import/prefer-default-export */
import { rgba } from 'polished'
import styled from 'styled-components'

export const HomeHeroBackgroundContainer = styled.section`
  width: 100%;
  height: 34rem;
  background: ${({ theme }) =>
    `url('/images/background.png') no-repeat center, 
    linear-gradient(
      0deg,
      ${theme.colors['base-white']} 0%,
      ${rgba(theme.colors['base-background'], 0.2)} 50%,
      ${theme.colors['base-background']} 100%
    )`};

  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const HomeHeroContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.2rem;
  }
`
export const TextHeroContainer = styled.div`
  max-width: 55%;
`

export const SpanHeroContainer = styled.div`
  margin-top: 5rem;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  span {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  svg {
    background-color: red;
    border-radius: 25px;
  }
`

export const RightSpanHeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const LeftSpanHeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
