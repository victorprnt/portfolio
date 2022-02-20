import styled from 'styled-components'

export const Wrapper = styled.section``
export const Container = styled.div``
export const Social = styled.div`
  .social-card {
    width: fit-content;
    padding: 4rem;
    position: relative;

    border-radius: 50%;
    background-color: #c4c4c4;

    .social-text {
      display: none;
      position: absolute;
    }

    &:hover .social-text {
      display: block;
    }
  }
`
