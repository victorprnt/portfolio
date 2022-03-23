import styled from 'styled-components'
import theme from 'styles/theme/light'

export const Wrapper = styled.section`
  height: 50vh;
  background-color: ${theme.colors.backgroundSectionOdd};
  color: #fff;
`
export const Container = styled.div`
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 3rem;

  .section-title,
  .text {
    max-width: 75%;
    margin: 0 auto;
    margin-bottom: 2rem;
    font-size: 3rem;
    font-weight: 500;
    letter-spacing: 0.3em;
  }

  .text {
    font-size: 1rem;
  }
`
export const Social = styled.div`
  display: flex;
  max-width: 75%;
  width: 100%;
  align-items: center;
  justify-content: flex-start;

  margin: 6rem auto 0;

  .social-card {
    width: fit-content;
    margin: 0 2rem;
    padding: 2.5rem;

    position: relative;

    border-radius: 50%;
    background-color: #fff;

    img {
      transition: 0.2s all ease-in-out;
    }

    &:hover {
      #gmail {
        filter: invert(29%) sepia(82%) saturate(3374%) hue-rotate(347deg)
          brightness(103%) contrast(84%);
      }
      #github {
        /* #181717 */
        filter: invert(7%) sepia(2%) saturate(952%) hue-rotate(314deg)
          brightness(99%) contrast(95%);
      }

      #linkedin {
        filter: invert(23%) sepia(53%) saturate(3863%) hue-rotate(198deg)
          brightness(95%) contrast(92%);
      }
    }
  }
  a {
    position: relative;

    .social-text {
      display: none;
      position: absolute;
      color: #fff;
      font-size: 1.5rem;
      text-align: center;
      left: 50%;
      bottom: -40%;
      transform: translateX(-50%);
    }
    &:hover {
      .social-text {
        display: block;
      }
    }
  }
`
