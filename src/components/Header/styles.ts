import styled from 'styled-components'
import theme from 'styles/theme/light'

export const Wrapper = styled.header`
  background-color: ${theme.colors.backgroundHeader};
  width: 100%;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;

  z-index: 1;
`

export const Container = styled.div`
  max-width: 75%;
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
    font-size: 1.5rem;
    letter-spacing: 0.07em;

    transition: 0.2s all ease-in-out;

    &::before {
      content: '< ';
      color: #fff;
      opacity: 0;
      transition: 0.2s all ease-in-out;
    }

    &::after {
      content: ' />';
      color: #fff;
      opacity: 0;
      transition: 0.2s all ease-in-out;
    }

    &:hover {
      color: ${theme.colors.menuHover};

      &::before {
        opacity: 1;
        color: ${theme.colors.menuHover};
      }

      &::after {
        opacity: 1;
        color: ${theme.colors.menuHover};
      }
    }
  }

  .menuItem:not(:last-child) {
    margin-right: 3rem;
  }
`
