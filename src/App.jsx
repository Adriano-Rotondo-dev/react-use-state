//*enable useState functionality
import Header from "./components/Header";
import Main from "./components/Main";

import codLan from "./data/codingLanguages";

function App() {
  return (
    <>
      <Header />
      <Main languages={codLan} />
    </>
  );
}

export default App;
