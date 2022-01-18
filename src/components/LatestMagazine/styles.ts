import { COLORS } from 'src/constant/common';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  display: inline-block;
  position: relative;
  font-size: 20px;
  font-weight: 400;
  &:after {
    display: block;
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    right: 0;
    height: 2px;
    background: ${COLORS.main};
  }
`;

export const LatestMagazineList = styled.ul`
  margin-top: 10px;
`;
