import React, { useState } from 'react';
import styled from 'styled-components';
import WordList from "../wordList/WordList"

import { getBuzzNinjaApi } from '../../api';

import Button from '../../theme/Button';
import NinjaNameModal from '../modal/NinjaNameModal';

const Form = () => {
  const [inputList, setInputList] = useState([""]);
  const [ninjaName, setNinjaName] = useState("");
  const [modalOpen, setModalOpen] = useState(false);


  
  // handle input change
  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const list = [...inputList];
    list[index] = value;
    setInputList(list);
  };
  
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
      <Main>
        <FormContent onSubmit={handleSubmit}>
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
        </FormContent>
        <WordList />
      </Main>
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

const Wrapper = styled.div`
  margin: 10 0;
`;

const Main = styled.div`
  @media (min-width: 640px) {
    display: flex;
  }
`;

const FormContent = styled.form`
  flex: 50%;
`;

const InputWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const StyledInput = styled.input`
  border-radius: 3px;
  margin-right: 1rem;
  height: 2rem;
  border: 1px solid #dbdbdb;
  border-radius: .375em;

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
