/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const HomeHeroBackgroundContainer = styled.section`
  width: 100%;
  height: 34rem;
  background: url('/images/background.png') no-repeat center;
  border: 1px solid black;
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
  max-width: 50%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const RightSpanHeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const LeftSpanHeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
