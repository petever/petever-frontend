import styled from '@emotion/styled';
import { Button, FormGroup, TextField } from '@mui/material';

export const Wrapper = styled.section`
  display: flex;
  width: 400px;
  margin: 100px auto;
  text-align: center;
  align-items: center;
`;
export const SingUpTitle = styled.h2`
  margin: 0 0 22px 0;
  text-align: center;
  font-size: 32px;
`;
export const FormItem = styled.div`
  & + & {
    margin-top: 20px;
  }
`;

export const InputText = styled(TextField)({
  '&': {
    width: '100%',
  },
  '& label.Mui-focused': {
    color: '#000',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#000',
    },
  },
});

export const EmailButton = styled(Button)({
  '&': {
    width: '100%',
    marginTop: '14px',
    padding: '10px 0',
    background: '#000',
    borderRadius: '6px',
    color: '#fff',
  },
  '&:hover': {
    backgroundColor: '#000',
  },
});

export const SignUpButton = styled(Button)({
  '&': {
    width: '100%',
    marginTop: '10px',
    padding: '10px 0',
    background: '#000',
    borderRadius: '6px',
    color: '#fff',
  },
  '&:hover': {
    backgroundColor: '#000',
  },
});

export const CheckboxWrapper = styled(FormGroup)({
  '&': {
    width: '400px',
  },
});
