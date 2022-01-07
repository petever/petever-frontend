import styled from '@emotion/styled';
import { COLORS } from '../../constant';

export const Wrapper = styled.section`
  display: flex;
  width: 400px;
  min-height: 100vh;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: ${COLORS.main};
  font-size: 40px;
`;
