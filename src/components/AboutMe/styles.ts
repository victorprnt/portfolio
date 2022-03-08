import styled from 'styled-components'
import theme from 'styles/theme/light'

export const Wrapper = styled.section`
  height: 100vh;
  background-color: ${theme.colors.backgroundSectionOdd};
`

export const Container = styled.div`
  max-width: 70%;
  height: 100%;
  margin: 0 auto;
  padding-top: 15rem;
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
    letter-spacing: 0.2rem;
    background-color: ${theme.colors.menuHover};
  }

  .section-title {
    margin-right: auto;
    margin-bottom: 6rem;
    font-size: 3rem;
    font-weight: 500;
    letter-spacing: 0.3em;
  }

  .section-subtitle {
    margin-right: auto;
    margin-bottom: 3rem;
    font-size: 2rem;
    font-weight: 200;
    letter-spacing: 0.1em;
  }

  .text {
    font-size: 1.5rem;
    letter-spacing: 0.2em;
    line-height: 2.5rem;
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
    letter-spacing: 0.2rem;

    transition: all 0.2s ease-in-out;

    &:hover {
      border: 1px solid ${theme.colors.menuHover};
      background-color: ${theme.colors.menuHover};
    }
  }
`

export const ImageColumn = styled.div`
  margin: auto auto;
  img {
    border-radius: 50%;
  }
`
