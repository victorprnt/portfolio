import styled from 'styled-components'

import theme from 'styles/theme/light'

export const Wrapper = styled.section`
  width: 100%;
  background-color: ${theme.colors.backgroundSectionEven};
  color: #fff;
`

export const Container = styled.div`
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 3rem;
  // display: flex;
  // justify-content: center;
  // align-items: center;

  .section-title {
    max-width: 75%;
    margin: 0 auto;
    margin-bottom: 6rem;
    font-size: 3rem;
    font-weight: 500;
    letter-spacing: 0.3em;
  }
`

export const Project = styled.div`
  max-width: 100%;
  margin-top: 2rem;

  .card {
    max-width: 50%;
    height: 330px;
    margin: 0 auto 6rem;
    position: relative;

    img {
      position: absolute;
      bottom: 0;
      width: 100%;
      max-height: 300px;
      height: 100vh;
      object-fit: cover;
      object-position: top;
    }

    .title-tags {
      width: 100%;
      height: fit-content;
      padding: 2rem 3rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: absolute;
      top: 0;

      .card-title {
        // position: absolute;
        // left: 1%;
        // top: 1%;
      }

      .tags {
        display: flex;
        // position: absolute;
        // right: 1%;
        // top: 1%;

        .tag {
          border-radius: 4px;
          border: 1px solid #fff;
          padding: 4px 6px;

          &:not(:last-child) {
            margin-right: 0.5rem;
          }
        }
      }
    }

    .description {
      margin: 0 4rem 2rem 4rem;
      position: absolute;
      left: 0;
      bottom: 0;
      font-size: 2rem;
      text-align: left;
      letter-spacing: 0.1em;

      opacity: 0;

      a {
        margin-right: calc(100% - 80px);
      }
    }

    &,
    img,
    .title-tags,
    .description {
      transition: all 0.2s ease-in-out;
    }

    &:hover {
      img {
        filter: brightness(0.5);
      }

      .title-tags {
        /* transform: translateY(-10px); */
      }

      .description {
        transform: translateY(-10px);
        opacity: 1;
      }
    }
  }

  &:not(:last-child) .card::after {
    content: '';
    height: 1px;
    width: 120%;
    background-color: #c4c4c4;
    position: absolute;
    bottom: -20px;
    left: -10%;
  }
`
