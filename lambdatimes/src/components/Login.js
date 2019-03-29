import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LoginDiv = styled.div`
background: white;
border: 1px solid #fff;
box-shadow: 0 0 5px #333;
width: 90%;
max-width: 600px;
box-sizing: border-box;
padding: 20px;
cursor: auto;
position: relative;
`;

const StyledH2 = styled.h2`
  font-family: Didot, serif;
  font-weight: bold;
  text-align: center;
  font-size: 40px;
`;

const LoginForm = styled.form`
display: flex;
flex-direction: column;
* {
  margin-bottom: 20px;
}
`;

const StyledInput = styled.input`
border: 1px solid #333;
border-radius: 5px;
padding: 20px;
transition: border-color 0.3s, box-shadow 0.3s;
&:hover {
  border: 1px solid lightblue;
}
&:focus {
  border: 1px solid #a3d0f7;
  box-shadow: 0 0 2px lightblue;
}
`;

const StyledButton = styled.button`
padding: 20px;
background: green;
color: white;
border-radius: 5px;
border: none;
font-weight: bold;
cursor: pointer;
`;

const Close = styled.div`
position: absolute;
top: 0;
right: 10px;
font-size: 40px;
transition: color 0.3s;
cursor: pointer;
&:hover {
  color: red;
}
`;

const Login = ({closeLogin}) => {
  return (
    <LoginDiv>
      <Close onClick={closeLogin}>&times;</Close>
      <StyledH2>Log In</StyledH2>
      <LoginForm>
        <StyledInput type="text" placeholder="Username" name="username"/>
        <StyledInput type="password" placeholder="Password" name="username"/>
        <StyledButton type="submit">Log In</StyledButton>
      </LoginForm>
    </LoginDiv>
  );
};

Login.propTypes = {
  closeLogin: PropTypes.func.isRequired
};
export default Login;
