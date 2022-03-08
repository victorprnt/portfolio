import Image from 'next/image'
import * as S from './styles'

const AboutMe = () => (
  <S.Wrapper>
    <S.Container>
      <S.TextColumn>
        <h1 className="section-title">Conheça um pouco sobre mim</h1>
        <h2 className="section-subtitle">Olá, eu sou o Victor Parente</h2>
        <p className="profession">Front-end Developer</p>
        <p className="text">
          Iniciei minha carreira em desenvolvimento no ano de 2020, quando não
          me vi satisfeito com as atividades que desenvolvia no dia-a-dia. Foi
          aí então que, em agosto de 2020, resolvi iniciar meus estudos em
          desenvolvimento voltado para a web. Fiz cursos passando pelas bases de
          HTML, CSS, JavaScript e desenvolvi projetos pessoais ao longo dessa
          jornada.
          <br />
          <br />
          Meu foco de estudo e desenvolvimento profissional é o front-end. Eu
          fico particularmente satisfeito, com sensação de dever cumprido ao ver
          um app funcionando corretamente integrado e respeitando o design
          sugerido <i>pixel perfect</i>.
          <br />
          <br />
          Como a vida não é só trabalho, no meu tempo livre, gosto de curtir
          boas histórias, sejam em filmes, séries, jogos ou livros. Também sou
          um ávido frequentador e desbravador de cafeterias na minha cidade
          (afinal, qual dev vive sem café, não é mesmo?).
        </p>
        <button type="button">Download CV</button>
      </S.TextColumn>

      <S.ImageColumn>
        <Image
          src="/img/developer-placeholder-image.svg"
          width={1024}
          height={1024}
        />
      </S.ImageColumn>
    </S.Container>
  </S.Wrapper>
)

export default AboutMe
