import styled from 'styled-components'
import { SectionBaseStyle } from '../../styles'

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
`
export const DetailsContainer = styled(SectionBaseStyle)`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const PaymentResumeContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
