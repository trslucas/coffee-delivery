/* eslint-disable import/prefer-default-export */
import { TextTitle } from '@/components/Typography'
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
`
export const TextHeroContainer = styled.div`
  max-width: 55%;
`

export const TextHero = styled(TextTitle)`
  margin-bottom: 1rem;
`

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`
