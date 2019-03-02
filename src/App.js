import React, { Component, Fragment } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import themes from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
  `;
  
const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: gray;
`;

const Card = styled.div`
  backgroud-color: white;
`;

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${props => props.theme.dangerColor}
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={themes}>
        <React.Fragment>
          <GlobalStyle />
            <Container>
            <Form />
          </Container>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

const Form = () => (
  <Card>
    <Button>Hello</Button>
  </Card>
)


export default App;
