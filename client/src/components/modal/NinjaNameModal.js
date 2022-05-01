import styled from "styled-components";
import Button from "../../theme/Button";

const NinjaNameModal = ({ 
    modalOpen,
    setModalOpen,
    ninjaName,
    setInputList,
    setNinjaName
  }) => {

  const handleReset = () => {
    setModalOpen(false);
    setInputList([""]);
    setNinjaName("");
  }

  return (
    modalOpen && (
    <Wrapper>
      <Content>
        {ninjaName}
        <Spacer />
        <Button onClick={handleReset}>Play again</Button>
      </Content>
    </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 20;
`;

const Content = styled.div`
  background: white;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90%;
  width: 80%;
  padding: 20px;
  border: 0.1rem solid #DCDCDC;
  border-radius: 1rem;
  box-shadow: 0 0.7rem 1.2rem rgba(0, 0, 0, 0.2);
`;

const Spacer = styled.div`
  margin: 0.8rem 0 1rem 0;
  border-bottom: 0.05rem solid red;
  width: 50%;
`;

export default NinjaNameModal;
