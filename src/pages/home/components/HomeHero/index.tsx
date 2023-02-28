import {
  BenefitsContainer,
  HomeHeroBackgroundContainer,
  HomeHeroContainer,
  TextHero,
  TextHeroContainer,
} from './styles'
import coffeImage from '../../../../assets/Imagem.png'
import Image from 'next/image'
import { RegularText } from '@/components/Typography'
import { InfoWithIcon } from '@/components/InfoWithicon'

import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'

export default function HomeHero() {
  const { colors } = useTheme()
  return (
    <>
      <HomeHeroBackgroundContainer>
        <HomeHeroContainer>
          <TextHeroContainer>
            <TextHero size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </TextHero>
            <RegularText size="l" color="subtitle" as="h3">
              Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
              hora
            </RegularText>
            <BenefitsContainer>
              <InfoWithIcon
                icon={<ShoppingCart weight="fill" />}
                text="Compra simples e segura"
                iconBg={colors['brand-yellow-dark']}
              />
              <InfoWithIcon
                icon={<Package weight="fill" />}
                text="Embalagem mantém o café intacto"
                iconBg={colors['base-text']}
              />
              <InfoWithIcon
                icon={<Timer weight="fill" />}
                text="Entrega rápida e rastreada"
                iconBg={colors['brand-yellow']}
              />
              <InfoWithIcon
                icon={<Coffee weight="fill" />}
                text="O café chega fresquinho até você"
                iconBg={colors['brand-purple']}
              />
            </BenefitsContainer>
          </TextHeroContainer>
          <Image src={coffeImage} alt="" />
        </HomeHeroContainer>
      </HomeHeroBackgroundContainer>
    </>
  )
}
