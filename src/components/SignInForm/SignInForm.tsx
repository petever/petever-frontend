import { signInAPI } from '@apis/auth';
import useInputs from '@hooks/useInputs';
import Link from 'next/link';
import React, { FormEvent } from 'react';
import { InputRow, Form, InputText, LoginButton } from './styles';
const SignInForm = () => {
  const [signInInputs, handleSignInInputChange] = useInputs({
    email: '',
    password: '',
  });
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await signInAPI(signInInputs);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <InputRow>
        <InputText
          type="email"
          name="email"
          placeholder="이메일"
          value={signInInputs.eamil}
          onChange={handleSignInInputChange}
        />
      </InputRow>
      <InputRow>
        <InputText
          type="password"
          name="password"
          placeholder="비밀번호"
          value={signInInputs.password}
          onChange={handleSignInInputChange}
        />
      </InputRow>
      <LoginButton type="submit">로그인</LoginButton>
      <div>
        <Link href="/blog/hello-world">
          <a>비밀번호 찾기</a>
        </Link>
        <Link href="/blog/hello-world">
          <a>회원가입</a>
        </Link>
      </div>
    </Form>
  );
};

export { SignInForm };
