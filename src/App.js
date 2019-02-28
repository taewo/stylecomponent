import React, { Component, Fragment } from 'react';
import styled, { createGlobalStyle, css, keyframes } from 'styled-components';
// import './App.css';  

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Container>
          <Button>Hello</Button>
          <Button danger rotationTime={1}>Hello</Button>
          <Input />
          <Anchor href="http://google.com">Go to Google</Anchor>
        </Container>
      </React.Fragment>
    );
  }
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: gray;
`

const Input = styled.input`
  border: 1px solid red;
`

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${props => (props.danger ? 'red' : 'purple')}
  ${props => {
    if (props.danger) {
      return css `animation: ${rotation} ${props.rotationTime}s linear infinite`;
    }
  }}
`;

const Anchor = styled(Button.withComponent('a'))`
  text-decoration: none;
`

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export default App;
