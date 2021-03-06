import React, { useCallback, useState } from 'react';
import Router from 'next/router';
import useInputs from 'src/hooks/useInputs';

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
import { getCheckEmailAPI, setMailCodeAPI, signUpAPI } from '@apis/auth';
import { EMAIL_REGEX, VALIDATION_MESSAGE, NICKNAME_REGEX, PASSWORD_REGEX } from '@constant/auth';

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
  const [signUpInputs, handleInputsChange, setSignUpInputs] = useInputs({
    email: '',
    nickname: '',
    password: '',
  });

  const { email, nickname, password } = signUpInputs;
  const { limit, terms, personal } = signUpCheck;

  const isEmailValidation = useCallback((email: string) => {
    return EMAIL_REGEX.test(email);
  }, []);

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
    if (!limit || !terms || !personal) {
      return {
        valid: false,
        message: VALIDATION_MESSAGE.check,
      };
    }
    return {
      valid: true,
    };
  };

  const handleEmailDuplicateCheck = useCallback(async () => {
    if (!email) {
      return;
    }
    try {
      await getCheckEmailAPI(email);
      alert('?????? ????????? ??????????????????.');
      setSignUpInputs({
        ...signUpInputs,
        email: '',
      });
    } catch (error) {
      console.log(error);
    }
  }, [email]);

  const handleEmailAuthentication = useCallback(async () => {
    try {
      if (isEmailValidation) {
        const result = await setMailCodeAPI(email);
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

  const handleCheckboxChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, checked } = event.target;
      setSignUpCheck({
        ...signUpCheck,
        [name]: checked,
      });
    },
    [signUpCheck]
  );

  const handleSignUp = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const authValidation = isAuthValidation();
      if (!authValidation.valid) {
        return alert(authValidation.message);
      }
      signUpAPI({ email, name: nickname, password })
        .then(() => {
          Router.replace('/signin');
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [isAuthValidation()]
  );

  return (
    <Wrapper>
      <form onSubmit={handleSignUp}>
        <SingUpTitle>????????????</SingUpTitle>
        <FormItem>
          <InputText
            type="email"
            name="email"
            id="outlined-basic"
            label="?????????"
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
                ????????? ??????
              </EmailButton>
            </div>
          )}
        </FormItem>
        <FormItem>
          <InputText
            type="text"
            name="nickname"
            id="outlined-basic"
            label="?????????"
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
            label="????????????"
            variant="outlined"
            onChange={handleInputsChange}
            value={password || ''}
          />
        </FormItem>
        <CheckboxTitle>????????????</CheckboxTitle>
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
            label="??? 14??? ???????????????.(??????)"
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
            label="???????????? (??????)"
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
            label="?????????????????? ??? ???????????? (??????)"
          />
        </CheckboxWrapper>
        <SignUpButton type="submit">????????????</SignUpButton>
      </form>
      {emailVerification.modal && (
        <SignUpEmailConfirm email={email} setEmailVerification={setEmailVerification} />
      )}
    </Wrapper>
  );
};

export { SignUpForm };
