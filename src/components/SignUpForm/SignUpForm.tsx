import React, { useCallback, useState } from 'react';
import useInputs from 'src/hooks/useInputs';
import {
  EMAIL_REGEX,
  PASSWORD_REGEX,
  NICKNAME_REGEX,
  VALIDATION_MESSAGE,
} from 'src/constant/auth';
import { getCheckEmail, setMailCode } from 'src/service/auth';

import { Checkbox, FormControlLabel } from '@mui/material';
import SignUpEmailConfirm from '../SignUpEmailConfirm';

import {
  CheckboxTitle,
  CheckboxWrapper,
  EmailButton,
  FormItem,
  InputText,
  SignUpButton,
  SingUpTitle,
  Wrapper,
} from './styles';

const SignUpForm = () => {
  const [emailVerification, setEmailVerification] = useState({
    modal: false,
    success: false,
  });
  const [signUpCheck, setSignUpCheck] = useState<{ [name: string]: boolean }>({
    limit: false,
    terms: false,
    personal: false,
  });
  const [signUpInputs, handleInputsChange] = useInputs({
    email: '',
    nickname: '',
    password: '',
  });

  const { email, nickname, password } = signUpInputs;
  const { limit, terms, personal } = signUpCheck;

  const isEmailValidation = (email: string) => {
    return EMAIL_REGEX.test(email);
  };

  const isAuthValidation = () => {
    if (!isEmailValidation(email)) {
      return {
        valid: false,
        message: VALIDATION_MESSAGE.email,
      };
    }
    if (!emailVerification.success) {
      return {
        valid: false,
        message: VALIDATION_MESSAGE.certification,
      };
    }

    if (!NICKNAME_REGEX.test(nickname)) {
      return {
        valid: false,
        message: VALIDATION_MESSAGE.nickname,
      };
    }
    if (!PASSWORD_REGEX.test(password)) {
      return {
        valid: false,
        message: VALIDATION_MESSAGE.password,
      };
    }
    if (!limit && !terms && !personal) {
      return {
        valid: false,
        message: VALIDATION_MESSAGE.check,
      };
    }
    return {
      valid: true,
    };
  };

  const handleEmailDuplicateCheck = async () => {
    try {
      await getCheckEmail(email);
      alert('이미 가입된 이메일입니다.');
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmailAuthentication = useCallback(async () => {
    try {
      if (isEmailValidation) {
        const result = await setMailCode(email);
        result.status === 200 &&
          setEmailVerification({
            modal: true,
            success: false,
          });
      }
    } catch (error) {
      setEmailVerification({
        modal: false,
        success: false,
      });
    }
  }, [email]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setSignUpCheck({
      [name]: checked,
    });
  };

  const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const authValidation = isAuthValidation();
    if (!authValidation.valid) {
      alert(authValidation.message);
    }
  };

  return (
    <Wrapper>
      <form onSubmit={handleSignUp}>
        <SingUpTitle>회원가입</SingUpTitle>
        <FormItem>
          <InputText
            type="email"
            name="email"
            id="outlined-basic"
            label="이메일"
            variant="outlined"
            onChange={handleInputsChange}
            onBlur={handleEmailDuplicateCheck}
            value={email || ''}
          />
          {!emailVerification.success && (
            <div>
              <EmailButton
                type="button"
                variant="contained"
                disableElevation
                disabled={isEmailValidation(email) ? false : true}
                onClick={handleEmailAuthentication}
              >
                이메일 인증
              </EmailButton>
            </div>
          )}
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
        <CheckboxTitle>약관동의</CheckboxTitle>
        <CheckboxWrapper>
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked={false}
                color="default"
                name="limit"
                onChange={handleCheckboxChange}
                // checked={limit}
              />
            }
            label="만 14세 이상입니다.(필수)"
          />
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked={false}
                color="default"
                name="terms"
                onChange={handleCheckboxChange}
                // checked={terms}
              />
            }
            label="이용약관"
          />
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked={false}
                color="default"
                name="personal"
                onChange={handleCheckboxChange}
                // checked={personal}
              />
            }
            label="개인정보수집 및 이용동의"
          />
        </CheckboxWrapper>
        <SignUpButton type="submit">가입하기</SignUpButton>
      </form>
      {emailVerification.modal && (
        <SignUpEmailConfirm
          email={email}
          setEmailVerification={setEmailVerification}
        />
      )}
    </Wrapper>
  );
};

export { SignUpForm };
