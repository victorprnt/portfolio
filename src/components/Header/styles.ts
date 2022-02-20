import styled from 'styled-components'
import theme from 'styles/theme/light'

export const Wrapper = styled.header`
  background-color: ${theme.colors.backgroundHeader};
  width: 100%;
  color: #fff;
`

export const Container = styled.div`
  max-width: 60%;
  margin: 0 auto;
  padding: 4rem 0;

  display: flex;
  justify-content: center;
  align-items: center;

  .title {
    margin-right: auto;
    font-size: 2rem;
    letter-spacing: 0.1em;
  }

  .menuItem {
    text-decoration: none;
    color: #fff;
    font-size: 2rem;
    letter-spacing: 0.07em;

    transition: 0.2s all ease-in-out;

    &:hover {
      color: ${theme.colors.menuHover};
    }
  }

  .menuItem:not(:last-child) {
    margin-right: 3rem;
  }
`
