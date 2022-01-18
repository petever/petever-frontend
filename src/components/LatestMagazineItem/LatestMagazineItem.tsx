import Link from 'next/link';
import React from 'react';
import {
  Category,
  Description,
  Img,
  ItemWrapper,
  Widget,
  Date,
  Writer,
  ItemContent,
} from './styles';

const LatestMagazineItem = () => {
  return (
    <ItemWrapper>
      <Link href="/">
        <ItemContent>
          <div>
            <Img
              width={268}
              height={176}
              src="https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg"
              alt=""
            />
          </div>
          <Description>
            <dt>우리집 고양이 츄르 존니 좋아해</dt>
            <dd>
              <Widget>
                <Category>LIFE</Category>
                <Writer>Petever</Writer>
                <Date>2021-01-22</Date>
              </Widget>
              <p>
                Bulldogs may look tough, but inside they’re sweet and gentle.
                They have a friendly temperament and a fond attachment to home
                and family. 츄르
              </p>
            </dd>
          </Description>
        </ItemContent>
      </Link>
    </ItemWrapper>
  );
};

export { LatestMagazineItem };
