import React from 'react';

import dynamic from 'next/dynamic';

const SignUpForm = dynamic(() => import('src/components/SignUpForm'));

const signUp = () => {
  return <SignUpForm />;
};

export default signUp;
