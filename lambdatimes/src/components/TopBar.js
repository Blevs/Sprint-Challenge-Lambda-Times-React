import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withAuthentication } from '../authenticate';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
const TopBarDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
  z-index: 5;
`;

const ContainerDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const ContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  span {
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
  }
`;

const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
  span {
    cursor: pointer;
    margin-right: 5%;
  }
  span:last-child {
    margin-right: 0;
  }
  span:hover {
    text-decoration: underline;
  }
`;

const ContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
  span {
    cursor: pointer;
  }
  span:first-child {
    margin-right: 10px;
  }
`;

const LogOutSpan = ({handleLogout}) => {
  return <span onClick={handleLogout}>LOG OUT</span>;
};

const Empty = () => {
  return <div/>;
};

const LogOut = withAuthentication(LogOutSpan)(Empty);

const TopBar = ({displayLogin, handleLogout}) => {
  return (
    <TopBarDiv>
      <ContainerDiv>
        <ContainerLeft>
          <span>TOPICS</span><span>SEARCH</span>
        </ContainerLeft>
        <ContainerCenter>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </ContainerCenter>
        <ContainerRight>
          {/* <span onClick={handleLogout}>LOG OUT</span> */}
          <LogOut handleLogout={handleLogout}/>
          <span onClick={displayLogin}>LOG IN</span>
        </ContainerRight>
      </ContainerDiv>
    </TopBarDiv>
  );
};

TopBar.propTypes = {
  displayLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired
};

export default TopBar;
