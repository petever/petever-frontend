import { Checkbox, FormControlLabel } from '@mui/material';
import useInputs from 'hooks/useInputs';

import React from 'react';

import {
  CheckboxWrapper,
  EmailButton,
  FormItem,
  InputText,
  SignUpButton,
  SingUpTitle,
  Wrapper,
} from './styles';

const SignUpForm = () => {
  const [signUpInputs, handleInputsChange] = useInputs({});
  const { email, nickname, password } = signUpInputs;

  return (
    <Wrapper>
      <form>
        <SingUpTitle>회원가입</SingUpTitle>
        <FormItem>
          <InputText
            type="email"
            name="email"
            id="outlined-basic"
            label="이메일"
            variant="outlined"
            onChange={handleInputsChange}
            value={email || ''}
          />
          <div>
            <EmailButton
              type="button"
              variant="contained"
              disableElevation
              disabled={true ? true : false}
            >
              이메일 인증
            </EmailButton>
          </div>
        </FormItem>
        <FormItem>
          <InputText
            type="text"
            name="nickname"
            id="outlined-basic"
            label="닉네임"
            variant="outlined"
            onChange={handleInputsChange}
            value={nickname || ''}
          />
        </FormItem>
        <FormItem>
          <InputText
            type="password"
            name="password"
            id="outlined-basic"
            label="비밀번호"
            variant="outlined"
            onChange={handleInputsChange}
            value={password || ''}
          />
        </FormItem>
        <FormItem>
          <InputText
            type="password"
            id="outlined-basic"
            label="비밀번호 확인"
            variant="outlined"
          />
        </FormItem>

        <CheckboxWrapper>
          <FormControlLabel
            control={<Checkbox defaultChecked color="default" />}
            label="만 14세 이상입니다.(필수)"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked color="default" />}
            label="이용약관"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked color="default" />}
            label="개인정보수집 및 이용동의"
          />
        </CheckboxWrapper>
        <SignUpButton type="submit">가입하기</SignUpButton>
      </form>
    </Wrapper>
  );
};

export { SignUpForm };
