import React from 'react';

const SignUpForm = () => {
  return (
    <section>
      <h2>회원가입</h2>
      <form>
        <div>
          <label htmlFor=""></label>
          <input type="email" />
          <button type="button">이메일 인증</button>
        </div>
        <div>
          <label htmlFor="">비밀번호</label>
          <input type="password" />
        </div>
        <div>
          <label htmlFor="">비밀번호 확인</label>
          <input type="password" />
        </div>
        <div>
          <label htmlFor="">닉네임</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">
            <input type="checkbox" name="" id="" />만 14세 이상입니다.(필수)
          </label>
          <label htmlFor="">
            <input type="checkbox" name="" id="" />
            이용약관
          </label>
          <label htmlFor="">
            <input type="checkbox" name="" id="" /> 개인정보수집 및 이용동의
          </label>
          {/* <label htmlFor="">
            <input type="checkbox" name="" id="" />
            이벤트, 프로모션 알림 메일 및 SMS 수신(선택)
          </label> */}
        </div>
        <button>가입하기</button>
      </form>
    </section>
  );
};

export { SignUpForm };
