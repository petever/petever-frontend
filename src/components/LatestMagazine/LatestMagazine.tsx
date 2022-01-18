import React from 'react';
import LatestMagazineItem from '../LatestMagazineItem';
import { LatestMagazineList, Title, Wrapper } from './styles';

const LatestMagazine = () => {
  return (
    <Wrapper>
      <Title>LATEST MAGAZINE</Title>
      <LatestMagazineList>
        {new Array(10).fill(0).map((_, index: number) => (
          <LatestMagazineItem key={index} />
        ))}
      </LatestMagazineList>
    </Wrapper>
  );
};

export { LatestMagazine };
