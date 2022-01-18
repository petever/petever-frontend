import styled from '@emotion/styled';

export const ItemWrapper = styled.li`
  & + & {
    margin-top: 30px;
  }
`;

export const ItemContent = styled.a`
  display: flex;
`;

export const Img = styled.img`
  display: block;
`;

export const Description = styled.dl`
  margin: 0;
  padding: 0 0 0 20px;
  dt {
    font-size: 22px;
  }
  dd {
    margin: 0;
  }
`;
export const Widget = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 14px;
`;

export const Category = styled.span`
  display: inline-block;
  height: 24px;
  line-height: 24px;
  padding: 0 10px;
  font-size: 12px;
  background: #01979d;
  color: #fff;
`;

export const Writer = styled.span`
  display: inline-block;
  margin: 0 10px;
`;
export const Date = styled.span`
  color: #aaa;
`;
