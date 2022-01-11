import styled from '@emotion/styled';

export const FooterWrapper = styled.footer`
  padding: 20px 20px;
  border-top: 1px solid #ebebeb;
`;
export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const FooterMenu = styled.ul`
  display: flex;
  align-items;center;
  font-size: 14px;
  li + li {
    margin-left: 20px;
  }
  li a {
    color: #000;
  }
`;
export const SnsMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-size: 0;
  }
  a + a {
    margin-left: 10px;
  }
`;
export const BusinessInfo = styled.div`
  display: flex;
`;
export const InfoItem = styled.dl`
  display: flex;
  font-size: 14px;
  margin: 5px 0;
  color: rgba(34, 34, 34, 0.4);
  & + & {
    margin-left: 20px;
  }
  dd {
    margin: 0 0 0 4px;
  }
`;

export const Copyright = styled.p`
  margin: 0;
  font-size: 14px;
  color: rgba(34, 34, 34, 0.4);
`;
