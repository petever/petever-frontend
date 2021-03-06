import { getAuthCheckAPI } from '@apis/auth';
import { Title, Wrapper, Text, Button } from './styles';

type SignUpEmailConfirmProps = {
  email: string;
  setEmailVerification: (value) => void;
};
const SignUpEmailConfirm = ({ email, setEmailVerification }: SignUpEmailConfirmProps) => {
  const handleMailCertify = async () => {
    const result = await getAuthCheckAPI(email);
    if (result.data) {
      return setEmailVerification({
        modal: false,
        success: true,
      });
    }
    alert('이메일 인증을 확인부탁드립니다.');
  };

  const handleClose = () => {
    setEmailVerification({
      modal: false,
      success: false,
    });
  };

  return (
    <Wrapper>
      <Title>인증 이메일이 발송되었습니다.</Title>
      <Text>Petever를 이용하시려면 인증 메일을 확인해 주세요.</Text>
      <Text>
        <strong>{email}</strong>로 전송된 인증 메일을 확인해 주세요.
        <br />
        감사합니다.
      </Text>
      <Button onClick={handleMailCertify}>확인</Button>
      <Button onClick={handleClose}>닫기</Button>
    </Wrapper>
  );
};

export { SignUpEmailConfirm };
