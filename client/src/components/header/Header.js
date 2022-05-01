import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getBuzzwordApi } from '../../api';

const Header = () => {
  const [buzzwordCount, setBuzzwordCount] = useState();

  useEffect(() => {
    getBuzzwordApi()
      .then(data => {
        setBuzzwordCount(data.data.countData)
      })
    }, [])
    
  return (
    <>
      <Title>Buzzwords Ninjification</Title>
      <SubTitle>Input buzzwords from this humongous list of {buzzwordCount} tech words to make up your own ninja name.</SubTitle>
      <Spacer />
    </>
  )
}

const Title = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
  color: #585858;
`;

const SubTitle = styled.h3`
  justify-content: center;
  margin-bottom: 1rem;
  color: #808080;
`;

const Spacer = styled.div`margin: 0.8rem 0 1rem 0;
  border-bottom: 0.05rem solid red;
  width: 50%;
  margin: 3rem auto;
`;

export default Header;
