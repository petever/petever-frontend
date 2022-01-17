import Link from 'next/link';
import React from 'react';
import { InputRow, Form, InputText, LoginButton } from './styles';
const SignInForm = () => {
  return (
    <Form>
      <InputRow>
        <InputText type="email" name="email" placeholder="이메일" value="" />
      </InputRow>
      <InputRow>
        <InputText
          type="password"
          name="password"
          placeholder="비밀번호"
          value=""
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
