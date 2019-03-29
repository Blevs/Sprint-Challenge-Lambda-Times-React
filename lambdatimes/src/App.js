import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Carousel from './components/Carousel/Carousel';
import Login from './components/Login';
import styled from 'styled-components';

const ModalDiv = styled.div`
position: fixed;
width: 100vw;
height: 100vh;
background: #00000033;
display: flex;
align-items: center;
justify-content: center;
z-index: 100;
cursor: pointer;
`;

const App = () => {
  const [renderLogin, setRenderLogin] = useState(true);
  return (
    <div className="App">
    {renderLogin
     && <ModalDiv id="login-modal"
                  onClick={event => event.target.id === "login-modal" && setRenderLogin(false)}>
          <Login closeLogin={() => setRenderLogin(false)}/>
        </ModalDiv>}
      <TopBar displayLogin={() => setRenderLogin(true)}/>
      <Header />
      <Carousel />
      <Content />
    </div>
  );
};

export default App;
