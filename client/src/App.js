import WordList from "./components/wordList/WordList"
import Form from "./components/form/Form";
import GlobalStyles from "./theme/GlobalStyles";
import NinjaNameModal from "./components/modal/NinjaNameModal";



const App = () => {
  return (
    <>
      <GlobalStyles />
      <Form />
      <WordList />
      <NinjaNameModal />
    </>
  );
}

export default App;
