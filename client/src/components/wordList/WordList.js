import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getBuzzwordApi } from '../../api';

const WordList = () => {
  const [buzzwordList, setBuzzwordList] = useState([]);

  useEffect(() => {
    getBuzzwordApi()
      .then(data => {
        setBuzzwordList(data.data.listData)
      })
    }, [])

  return (
    <>
      <List>
        {buzzwordList.map(word => {
          return (
            <li key={word._id}>{word.buzzWord}</li>
          )
        })}
      </List>
    </>
  )
};

const List = styled.ul`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  list-style-type: none;
`;

export default WordList;