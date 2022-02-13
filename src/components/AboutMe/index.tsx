import * as S from './styles'

const AboutMe = () => (
  <S.Wrapper>
    <S.TextColumn>
      <p className="profession">Front-end Developer</p>
      <h1 className="title">Lorem ipsum dolor sit amet</h1>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquam
        temporibus harum, veniam omnis amet tempore quisquam quis quo laborum
        aperiam debitis cupiditate modi, sunt veritatis hic minus ipsam vero!
      </p>
      <button type="button">Download CV</button>
    </S.TextColumn>

    <S.ImageColumn>
      <img src="https://kingstonplaza.com/wp-content/uploads/2015/07/generic-avatar-300x300.png" />
    </S.ImageColumn>
  </S.Wrapper>
)

export default AboutMe
