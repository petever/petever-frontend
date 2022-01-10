import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
  Gnb,
  HeaderMain,
  HeaderTop,
  Logo,
  Nav,
  TopMenu,
  Wrapper,
} from './styles';

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 10) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <Wrapper isScroll={isScroll}>
      <HeaderTop>
        <TopMenu>
          <li>
            <Link href="/signUp">
              <a>회원가입</a>
            </Link>
          </li>
          <li>
            <Link href="/signIn">
              <a>로그인</a>
            </Link>
          </li>
        </TopMenu>
      </HeaderTop>
      <HeaderMain>
        <Logo>Petever</Logo>
        <Nav>
          <Gnb>
            <li>
              <Link href="/">
                <a>ARCHIVES</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>PET TALK</a>
              </Link>
            </li>
          </Gnb>
        </Nav>
      </HeaderMain>
    </Wrapper>
  );
};

export { Header };
