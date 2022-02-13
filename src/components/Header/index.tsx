import * as S from './styles'

const Header = () => (
  <S.Wrapper>
    <span className="title">
      Victor <strong>Parente</strong>
    </span>
    <div className="menu">
      <a href="#" className="menuItem">
        Home
      </a>
      <a href="#" className="menuItem">
        About me
      </a>
      <a href="#" className="menuItem">
        Projects
      </a>
      <a href="#" className="menuItem">
        Contact
      </a>
    </div>
  </S.Wrapper>
)

export default Header
