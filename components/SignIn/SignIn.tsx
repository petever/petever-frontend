import React from 'react';
import SignInForm from '../SignInForm';
import { Wrapper, Title } from './styles';

const SignIn = () => {
  return (
    <Wrapper>
      <Title>펫에버</Title>
      <SignInForm />
    </Wrapper>
  );
};

export { SignIn };
