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
                <span>oi</span>
                <span>oi</span>
              </RightSpanHeroContainer>
              <LeftSpanHeroContainer>
                <span>oi</span>
                <span>oi</span>
              </LeftSpanHeroContainer>
            </SpanHeroContainer>
          </TextHeroContainer>
          <Image src={coffeImage} alt="" />
        </HomeHeroContainer>
      </HomeHeroBackgroundContainer>
    </>
  )
}
