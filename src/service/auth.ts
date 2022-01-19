import instance from 'src/utils/instance';

export const getCheckEmail = (email: string) => {
  return instance.get(`/signup/mail/check?email=${email}`);
};

export const setMailCode = (email: string) => {
  return instance.post(`/mail?email=${email}`);
};

export const getAuthCheck = (email: string) => {
  return instance.get(`/mail/auth/check?email=${email}`);
};
