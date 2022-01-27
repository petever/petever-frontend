import { COLORS } from '@constant/common';
import styled from '@emotion/styled';

type WrapperProps = {
  isScroll: boolean;
};
export const Wrapper = styled.header<WrapperProps>`
  position: sticky;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1;
  border-bottom: ${(props) => (props.isScroll ? '1px solid #ededed' : 'none')};
  background: #fff;
`;

export const HeaderTop = styled.div`
  display: flex;
  padding: 8px 40px;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
`;
export const TopMenu = styled.ul`
  display: flex;
  margin-left: auto;
  font-size: 12px;
  li a {
    color: #222222cc;
  }
  li + li {
    margin-left: 24px;
  }
`;
export const HeaderMain = styled.div`
  background: #000;
  color: #fff;
`;

export const Logo = styled.h1`
  margin: 0 0 0 -17px;
  padding: 0 0 4px 40px;
  border-bottom: 2px solid #fff;
`;

export const Nav = styled.nav`
  display: flex;
  padding: 2px 40px;
`;
export const Gnb = styled.ul`
  display: flex;

  text-align: -webkit-match-parent;
  li + li {
    margin-left: 40px;
  }
  li a {
    color: #dfdfdf;
  }
  li a:hover {
    color: ${COLORS.main};
  }
`;
