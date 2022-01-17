import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  padding: 30px;
  background: #fff;
  border-radius: 20px;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
  z-index: 10;
  border: 1px solid #000;
`;

export const Title = styled.em`
  display: block;
  margin-bottom: 10px;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
`;
export const Text = styled.p`
  margin: 0;
`;

export const Button = styled.button`
  display: inline-block;
  margin-top: 20px;
  background: #fff;
  border: 1px solid #000;
  padding: 8px 14px;
  border-radius: 4px;
  background: #000;
  color: #fff;
  cursor: pointer;
  & + & {
    background: #fff;
    color: #000;
    margin-left: 20px;
  }
`;

export const InputCode = styled.input`
  border: 1px solid #000;
`;
