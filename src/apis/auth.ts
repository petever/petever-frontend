import { SignIn } from './../types/auth';
import instance from 'src/utils/instance';
import { Auth } from '../types/auth';

export const getCheckEmailAPI = (email: string) => {
  return instance.get(`/signup/mail/check?email=${email}`);
};

export const setMailCodeAPI = (email: string) => {
  return instance.post(`/mail?email=${email}`);
};

//메인인증체크
export const getAuthCheckAPI = (email: string) => {
  return instance.get(`/mail/auth/check?email=${email}`);
};

export const signUpAPI = (auth: Auth) => {
  return instance.post(`/signup`, auth);
};

export const signInAPI = (signInfo: SignIn) => {
  return instance.post(`/login`, signInfo);
};
