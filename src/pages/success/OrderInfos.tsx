import Image from 'next/image'
import { InfosContainer, OrderInfosContainer } from './styles'
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'
import orderImage from '../../../public/images/Illustration.svg'
import { InfoWithIcon } from '@/components/InfoWithicon'
import { useTheme } from 'styled-components'
import { RegularText } from '@/components/Typography'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
export function OrderInfos() {
  const { colors } = useTheme()
  const router = useRouter()

  const routerQuery = router.query
  const { houseNumber, city, street, uf, paymentInput, complement } =
    routerQuery || {}

  useEffect(() => {
    if (
      !houseNumber ||
      !city ||
      !street ||
      !uf ||
      !paymentInput ||
      !complement
    ) {
      router.push('/')
    }
  }, [
    city,
    complement,
    houseNumber,
    paymentInput,
    router,
    routerQuery,
    street,
    uf,
  ])

  return (
    <OrderInfosContainer>
      <InfosContainer>
        <InfoWithIcon
          icon={<MapPin weight="fill" />}
          iconBg={colors['brand-purple']}
          text={
            <RegularText>
              Entrega em {''}
              <strong>
                {street} {''} {houseNumber}
                {''} {complement}
              </strong>
              <br />
              {city} {''} - {uf}
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
              <strong>{paymentInput}</strong>
            </RegularText>
          }
        />
      </InfosContainer>
      <Image src={orderImage} alt="" />
    </OrderInfosContainer>
  )
}
