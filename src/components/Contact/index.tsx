import Image from 'next/image'
import * as S from './styles'

const Contact = () => (
  <S.Wrapper>
    <S.Container>
      <h1 className="section-title">Contact me</h1>
      <p className="text">Entre em contato</p>
      <S.Social>
        <a href="#" className="social-icon">
          <div className="social-card">
            <Image
              id="gmail"
              src="/icons/gmail.svg"
              alt=""
              width="32"
              height="32"
            />
          </div>
          <p className="social-text">Gmail</p>
        </a>

        <a href="#" className="social-icon">
          <div className="social-card">
            <Image
              id="github"
              src="/icons/github.svg"
              alt=""
              width="32"
              height="32"
            />
          </div>
          <p className="social-text">Github</p>
        </a>

        <a href="#" className="social-icon">
          <div className="social-card">
            <Image
              id="linkedin"
              src="/icons/linkedin.svg"
              alt=""
              width="32"
              height="32"
            />
          </div>
          <p className="social-text">LinkedIn</p>
        </a>
      </S.Social>
    </S.Container>
  </S.Wrapper>
)

export default Contact
