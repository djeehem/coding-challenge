import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getBuzzNinjaApi, getBuzzwordApi } from '../../api';

import Button from '../../theme/Button';
import NinjaNameModal from '../modal/NinjaNameModal';

const Form = () => {
  const [inputList, setInputList] = useState([""]);
  const [buzzwordCount, setBuzzwordCount] = useState();
  const [ninjaName, setNinjaName] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
  getBuzzwordApi()
    .then(data => {
      setBuzzwordCount(data.data.countData)
    })
  }, [])
  
  // handle input change
  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const list = [...inputList];
    list[index] = value;
    setInputList(list);
  };

  console.log(inputList)
  
  // handle click event of the Remove button
  const handleRemoveClick = i => {
    const list = [...inputList];
    console.log(i)
    list.splice(i, 1);
    console.log(list)
    setInputList(list);
  };
  
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, "" ]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setModalOpen(true);
    getBuzzNinjaApi(inputList)
    .then(data => {
      console.log(data.data.data)
      setNinjaName(data.data.data)
    })
  }
  
  return (
    <Wrapper>
      <Title>Buzzwords Ninjification</Title>

      <SubTitle>Input buzzwords from this humongous list of {buzzwordCount} tech words below to make up your own ninja name.</SubTitle>

      <form onSubmit={handleSubmit}>
        <AddNinjify>
          <Button type="button" onClick={handleAddClick}>+</Button>
          <Button type="submit" value="Ninjify">Ninjify</Button>
        </AddNinjify>
        {inputList.map((input, i) => {
          return (
              <InputWrapper key={i}>
                <StyledInput
                  // name=""
                  placeholder=" Enter buzzword"
                  value={input}
                  onChange={e => handleInputChange(e, i)}
                />
              
                {inputList.length !== 1 &&
                <Button
                  type="button"
                  onClick={() => handleRemoveClick(i)}>-
                </Button>}
              </InputWrapper>
          );
        })}
      </form>

      <NinjaNameModal
        ninjaName={ninjaName}
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
        setNinjaName={setNinjaName}
        setInputList={setInputList}
        />
    </Wrapper>
  );
}

const Title = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
`;

const SubTitle = styled.h3`
  text-align: center;
  margin-bottom: 1rem;
`;

const Wrapper = styled.div`
  margin: 10 0;
`;

const InputWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const StyledInput = styled.input`
  display: flex;
  border-radius: 3px;
  border: none;
  margin-right: 1rem;
  height: 2rem;

  &:focus {
    outline: 1px solid #82abed;
  }
`;

const AddNinjify = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export default Form;
