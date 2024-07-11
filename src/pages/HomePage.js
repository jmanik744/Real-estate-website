import React from 'react';
import styled from 'styled-components';
import SignupForm from '../components/SignupForm';

const HomePage = () => (
  <HomeContainer>
    <div>
        <h1>Welcome to Dylan Estate</h1>
        <p>Your one-stop solution for property listings.</p>
    </div>
    <SignupForm />
  </HomeContainer>
);

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family:gilroy;
  height: 100vh;
  text-align: center;
  background-color: darkblue;

  h1 {
    font-size: 48px;
    margin-bottom: 20px;
  }

  p {
    font-size: 24px;
  }
`;

export default HomePage;
