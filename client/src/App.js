import Form from "./components/form/Form";
import GlobalStyles from "./theme/GlobalStyles";
import NinjaNameModal from "./components/modal/NinjaNameModal";
import Header from "./components/header/Header";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Form />
      <NinjaNameModal />
    </>
  );
}

export default App;
