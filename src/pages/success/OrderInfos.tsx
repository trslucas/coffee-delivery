import Image from 'next/image'
import { InfosContainer, OrderInfosContainer } from './styles'
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'
import orderImage from '../../../public/images/Illustration.svg'
import { InfoWithIcon } from '@/components/InfoWithicon'
import { useTheme } from 'styled-components'
import { RegularText } from '@/components/Typography'

export function OrderInfos() {
  const { colors } = useTheme()
  return (
    <OrderInfosContainer>
      <InfosContainer>
        <InfoWithIcon
          icon={<MapPin weight="fill" />}
          iconBg={colors['brand-purple']}
          text={
            <RegularText>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong> <br />
              Farrapos - Porto Alegre, RS
            </RegularText>
          }
        />
        <InfoWithIcon
          icon={<Clock weight="fill" />}
          iconBg={colors['brand-yellow']}
          text={
            <RegularText>
              Previsão de entrega <br />
              <strong>20 min - 30 min</strong>
            </RegularText>
          }
        />
        <InfoWithIcon
          icon={<CurrencyDollar weight="fill" />}
          iconBg={colors['brand-yellow-dark']}
          text={
            <RegularText>
              Pagamento na entrega <br />
              <strong>Cartão de crédito</strong>
            </RegularText>
          }
        />
      </InfosContainer>
      <Image src={orderImage} alt="" />
    </OrderInfosContainer>
  )
}
