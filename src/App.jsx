import React from 'react';
import Header from './components/Header';
import { GlobalStyle } from './styles/globalStyle';

class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Header />;
      </>
    );
  }
}

export default App;
