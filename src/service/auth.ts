import instance from 'src/utils/instance';

export const getCheckEmail = (email: string) => {
  instance.get(`/signup/mail/check?email=${email}`);
};

export const setMailCode = (email: string) => {
  instance.post(`/signup/mail?email=${email}`);
};

export const getMailAuthentication = (code: string, email: string) => {
  return instance.post(`/signup/mail/auth?code=${code}&email=${email}`);
};
