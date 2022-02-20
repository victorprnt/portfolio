import Image from 'next/image'
import * as S from './styles'

const Contact = () => (
  <S.Wrapper>
    <S.Container>
      <h1 className="section-title">Contact me</h1>
      <p className="text">Entre em contato</p>
      <S.Social>
        <div className="social-card">
          <a href="#" className="social-icon">
            <Image src="/icons/gmail.svg" alt="" width="64" height="64" />
          </a>
          <p className="social-text">Gmail</p>
        </div>

        <div className="social-card">
          <a href="#" className="social-icon">
            <Image src="/icons/instagram.svg" alt="" width="64" height="64" />
          </a>
          <p className="social-text">instagram</p>
        </div>

        <div className="social-card">
          <a href="#" className="social-icon">
            <Image src="/icons/linkedin.svg" alt="" width="64" height="64" />
          </a>
          <p className="social-text">LinkedIn</p>
        </div>
      </S.Social>
    </S.Container>
  </S.Wrapper>
)

export default Contact
