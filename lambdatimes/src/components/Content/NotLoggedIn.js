import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div`
padding: 20px;
font-size: 20px;
text-align: center;
`;

const LogIn = styled.span`
font-weight: bold;
cursor: pointer;
text-decoration: underline;
`;

const NotLoggedIn = ({displayLogin}) => {
  return (
    <StyledDiv>To view content, please <LogIn onClick={displayLogin}>LOG IN</LogIn> </StyledDiv>
  );
};

NotLoggedIn.propTypes = {
  displayLogin: PropTypes.func.isRequired
};
export default NotLoggedIn;
