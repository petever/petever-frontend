import Link from 'next/link';
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import {
  BusinessInfo,
  Copyright,
  FooterMenu,
  FooterWrapper,
  InfoItem,
  MenuWrapper,
  SnsMenu,
} from './styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <MenuWrapper>
        <FooterMenu>
          <li>
            <Link href="/">
              <a>이용약관</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <strong>개인정보 처리방침</strong>
              </a>
            </Link>
          </li>
        </FooterMenu>
        <SnsMenu>
          <Link href="/">
            <a>
              <InstagramIcon style={{ color: '#000' }} />
            </a>
          </Link>
          <Link href="/">
            <a>
              <FacebookIcon style={{ color: '#000' }} />
            </a>
          </Link>
        </SnsMenu>
      </MenuWrapper>

      <div>
        <BusinessInfo>
          <InfoItem>
            <dt>펫에버 · 대표</dt>
            <dd>박준우</dd>
          </InfoItem>
          <InfoItem>
            <dt>사업자등록번호:</dt>
            <dd>000-00-00000</dd>
          </InfoItem>
          <InfoItem>
            <dt>문의:</dt>
            <dd>123121232131,</dd>
            <dd>petevet@gmail.com</dd>
          </InfoItem>
        </BusinessInfo>
        <Copyright>Petever© Copyright 2022, All Rights Reserved</Copyright>
      </div>
    </FooterWrapper>
  );
};

export { Footer };
