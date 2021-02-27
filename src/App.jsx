import React from 'react';
import Header from './components/Header';
import InfoSection from './components/InfoSection';

import { GlobalStyle } from './styles/globalStyle';

import { UserNameProvider } from './contexts/PickUserNameContext';

class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <UserNameProvider>
          <Header />;
          <InfoSection />
        </UserNameProvider>
      </>
    );
  }
}

export default App;
