import styled from 'styled-components';

const GlobalNavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.black};

  .global-nav-link,
  button {
    display: block;
    padding: 0 2rem;
    line-height: 2.4;
    font-size: 1em;
    font-weight: bold;
    color: ${(props) => props.theme.white};
    background-color: transparent;
    border-top: 4px solid ${(props) => props.theme.black};
  }

  .global-nav-link:focus,
  .global-nav-link:hover {
    border-color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.grey};
  }

  .global-nav-link.active {
    border-color: ${(props) => props.theme.green};
  }
`;

export default GlobalNavStyles;
