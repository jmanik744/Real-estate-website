import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm';

const LoginPage = () => (
  <LoginContainer>
    <h1>Login</h1>
    <LoginForm />
  </LoginContainer>
);

const LoginContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export default LoginPage;
