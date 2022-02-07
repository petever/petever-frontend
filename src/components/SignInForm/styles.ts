import styled from '@emotion/styled';

export const Form = styled.form`
  width: 100%;
  margin-top: 20px;
`;

export const InputRow = styled.div`
  border: 1px solid #dadada;
  padding: 17px 18px 17px 19px;
  border-radius: 6px 6px 0 0;
  & + & {
    border-top: 0;
    border-radius: 0 0 6px 6px;
    box-shadow: 0 2px 6px 0 rgb(68 68 68 / 8%);
  }
`;

export const InputText = styled.input`
  width: 100%;
  border: 0;
  font-size: 18px;
  font-weight: 400;
  color: #222;
`;

export const LoginButton = styled.button`
  width: 100%;
  min-height: 60px;
  margin: 30px 0px;
  border: solid 1px rgba(0, 0, 0, 0.15);

  border-radius: 6px;
  background: #000;
  color: #fff;
  font-size: 22px;
  font-weight: 700;
`;
