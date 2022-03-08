import Image from 'next/image'
import * as S from './styles'

const Projects = () => (
  <S.Wrapper>
    <S.Container>
      <h1 className="section-title">Projetos desenvolvidos</h1>

      <S.Project>
        <div className="card">
          <Image src="/img/ss-project-01.png" layout="fill" />
          <div className="title-tags">
            <h1 className="card-title">Title</h1>
            <div className="tags">
              <p className="tag">tag 01</p>
              <p className="tag">tag 02</p>
              <p className="tag">tag 03</p>
            </div>
          </div>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            reprehenderit eveniet commodi dignissimos aliquam optio, eum alias
            ab pariatur. Tempore doloribus placeat culpa animi harum commodi
            qui? Aliquam, quod omnis!
          </p>
        </div>
      </S.Project>

      <S.Project>
        <div className="card">
          <Image src="/img/ss-project-01.png" alt="" layout="fill" />
          <div className="title-tags">
            <h1 className="card-title">Title</h1>
            <div className="tags">
              <p className="tag">tag 01</p>
              <p className="tag">tag 02</p>
              <p className="tag">tag 03</p>
            </div>
          </div>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            reprehenderit eveniet commodi dignissimos aliquam optio, eum alias
            ab pariatur. Tempore doloribus placeat culpa animi harum commodi
            qui? Aliquam, quod omnis!
          </p>
        </div>
      </S.Project>

      <S.Project>
        <div className="card">
          <Image src="/img/ss-project-01.png" alt="" layout="fill" />
          <div className="title-tags">
            <h1 className="card-title">Title</h1>
            <div className="tags">
              <p className="tag">tag 01</p>
              <p className="tag">tag 02</p>
              <p className="tag">tag 03</p>
            </div>
          </div>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            reprehenderit eveniet commodi dignissimos aliquam optio, eum alias
            ab pariatur. Tempore doloribus placeat culpa animi harum commodi
            qui? Aliquam, quod omnis!
          </p>
        </div>
      </S.Project>
    </S.Container>
  </S.Wrapper>
)

export default Projects
