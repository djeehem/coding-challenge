import React, { useState, useEffect } from 'react';
import { getBuzzwordApi } from '../api';

const Header = () => {
  const [buzzwordList, setBuzzwordList] = useState([]);
  const [buzzwordCount, setBuzzwordCount] = useState();

  useEffect(() => {
    getBuzzwordApi()
      .then(data => {
        console.log(data);
        console.log(`Api: ${data.data.countData}`)
        console.log(`Api: ${data.data.listData}`)
        setBuzzwordCount(data.data.countData)
        setBuzzwordList(data.data.listData)
      })
    }, [])

  return (
    <>
      <div>Input any of those {buzzwordCount} tech buzzwords to make up your own ninja name.</div>
      <ul>
        {buzzwordList.map(word => {
          return (
            <li key={word._id}>{word.buzzWord}</li>
          )
        })}
      </ul>
    </>

  )
};

export default Header;