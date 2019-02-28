import React, { Component, Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
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
          <Button danger>Hello</Button>
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
`;

// const Anchor = Button.withComponent('a').extend`
//   text-decoration:none;
// `

const Anchor = styled(Button.withComponent('a'))`
  text-decoration:none;
`

export default App;
