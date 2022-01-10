import styled from '@emotion/styled';

type WrapperProps = {
  isScroll: boolean;
};
export const Wrapper = styled.header<WrapperProps>`
  position: sticky;
  left: 0;
  top: 0;
  right: 0;
  z-index: 10;
  background: #fff;
  height: 104px;
  border-bottom: ${(props) => (props.isScroll ? '1px solid #ededed' : 'none')};
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
`;

export const Logo = styled.h1`
  margin: 0;
  font-size: 30px;
`;

export const Nav = styled.nav`
  display: flex;
`;
export const Gnb = styled.ul`
  display: flex;
  margin-left: auto;
  text-align: -webkit-match-parent;
  li + li {
    margin-left: 40px;
  }
  li a {
    color: #333;
  }
`;
