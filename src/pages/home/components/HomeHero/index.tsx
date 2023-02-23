import {
  HomeHeroBackgroundContainer,
  HomeHeroContainer,
  LeftSpanHeroContainer,
  RightSpanHeroContainer,
  SpanHeroContainer,
  TextHeroContainer,
} from './styles'
import coffeImage from '../../../../assets/Imagem.png'
import Image from 'next/image'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export default function HomeHero() {
  return (
    <>
      <HomeHeroBackgroundContainer>
        <HomeHeroContainer>
          <TextHeroContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
              hora
            </p>
            <SpanHeroContainer>
              <RightSpanHeroContainer>
                <span>
                  <ShoppingCart size={32} weight="fill" /> Compra simples e
                  segura
                </span>
                <span>
                  <Package weight="fill" size={32} /> Embalagem mantem o café
                  intacto
                </span>
              </RightSpanHeroContainer>
              <LeftSpanHeroContainer>
                <span>
                  <Timer weight="fill" size={32} /> Entrega rápida e rastreada
                </span>
                <span>
                  <Coffee weight="fill" size={32} /> O café chega fresquinho até
                  você
                </span>
              </LeftSpanHeroContainer>
            </SpanHeroContainer>
          </TextHeroContainer>
          <Image src={coffeImage} alt="" />
        </HomeHeroContainer>
      </HomeHeroBackgroundContainer>
    </>
  )
}
