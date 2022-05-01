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
            <Buzzword key={word._id}>{word.buzzWord}</Buzzword>
          )
        })}
      </List>
    </>
  )
};

const List = styled.ul`
display: grid;
  grid-template-columns: repeat(auto-fit, minmax(7rem, 1fr));
  flex: 50%;
  list-style-type: none; 
`;

const Buzzword = styled.li`
  display: inline;
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: white;
  border: 1px solid #dbdbdb;
  border-radius: .375em;
`;

export default WordList;