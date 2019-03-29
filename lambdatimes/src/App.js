import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Carousel from './components/Carousel/Carousel';
import Login from './components/Login';
import NotLoggedIn from './components/Content/NotLoggedIn';
import styled from 'styled-components';
import { withAuthentication } from './authenticate';

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

const ProtectedContent = withAuthentication(Content)(NotLoggedIn);

const App = () => {
  const [renderLogin, setRenderLogin] = useState(false);
  const handleLogin = event => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    if (password !== "" && username !== "") {
      window.localStorage.setItem("loggedIn", JSON.stringify(true));
      setRenderLogin(false);
    }
  };
  const handleLogout = event => {
    event.preventDefault();
    window.localStorage.setItem("loggedIn", JSON.stringify(false));
    window.location.reload();
  };
  return (
    <div className="App">
    {renderLogin
     && <ModalDiv id="login-modal"
                  onClick={event => event.target.id === "login-modal" && setRenderLogin(false)}>
          <Login closeLogin={() => setRenderLogin(false)} handleLogin={handleLogin} />
        </ModalDiv>}
      <TopBar displayLogin={() => setRenderLogin(true)} handleLogout={handleLogout} />
      <Header />
      <Carousel />
      <ProtectedContent displayLogin={() => setRenderLogin(true)}/>
    </div>
  );
};

export default App;
