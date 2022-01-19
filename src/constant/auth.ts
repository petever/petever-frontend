export const VALIDATION_MESSAGE = {
  email: '이메일을 입력해주세요.',
  certification: '이메일을 인증해주세요.',
  nickname: '닉네임을 입력해주세요.',
  password: '비밀번호를 영문 숫자 조합으로 6~16자 입력해주세요.',
  check: '약관동의를 체크해주세요.',
};

export const EMAIL_REGEX = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
export const NICKNAME_REGEX = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{1,10}$/;
export const PASSWORD_REGEX = /^[a-zA-Z0-9]{6,16}$/;
