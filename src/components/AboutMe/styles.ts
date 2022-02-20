import styled from 'styled-components'
import theme from 'styles/theme/light'

export const Wrapper = styled.section`
  height: 60%;
  background-color: ${theme.colors.backgroundSectionEven};
`

export const Container = styled.div`
  max-width: 50%;
  height: 100%;
  margin: 0 auto;
  padding-top: 12rem;
  display: flex;
  justify-content: center;
  // align-items: center;
`

export const TextColumn = styled.div`
  // max-width: 40%;
  display: flex;
  flex-direction: column;

  margin-right: 2rem;

  color: #fff;

  .profession {
    width: fit-content;
    margin-bottom: 3rem;
    padding: 0.5rem 1.5rem;

    font-size: 1.5rem;

    background-color: ${theme.colors.professionLabel};
  }

  .section-title {
    margin-right: auto;
    font-size: 2rem;
    letter-spacing: 0.1em;
  }

  .text {
    font-size: ${theme.fontSize.desktopText};
    letter-spacing: 0.1em;
    margin-bottom: auto;
  }

  button {
    max-width: fit-content;
    padding: 1.5rem 4rem;
    margin-bottom: 6rem;

    background-color: transparent;
    border: 1px solid #fff;

    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;

    transition: all 0.2s ease-in-out;

    &:hover {
      border: 1px solid ${theme.colors.menuHover};
      background-color: ${theme.colors.menuHover};
    }
  }
`

export const ImageColumn = styled.div`
  img {
    border-radius: 50%;
  }
`
