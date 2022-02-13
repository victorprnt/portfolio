import styled from 'styled-components'
import theme from 'styles/theme/light'

export const Wrapper = styled.header`
  width: 100%;
  padding: 2% 3%;

  display: flex;
  justify-content: space-around;

  background-color: ${theme.colors.backgroundHeader};
  color: #fff;

  .title,
  .menuItem {
    font-size: 1.75rem;
  }

  .menu {
    .menuItem {
      width: 100%;
      margin: 0 10%;

      text-decoration: none;
      color: #fff;
      white-space: nowrap;

      // position: relative;

      transition: all 0.2s ease-in-out;

      &:hover {
        // &::before {
        //   content: '< ';
        //   font-size: 1.5rem;
        //   color: ${theme.colors.menuHover};

        //   position: absolute;
        //   left: 0;
        // }

        color: ${theme.colors.menuHover};

        // &::after {
        //   content: ' />';
        //   font-size: 1.5rem;
        //   color: ${theme.colors.menuHover};

        //   position: absolute;
        //   right: 0;
        // }
      }
    }
  }
`
