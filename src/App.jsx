//*crea i componenti da riutilizzare (button?)
//*importa i componenti da utilizzare [header, main(lista di bottoni), textboxes]
//*enable useState functionality
import Header from "./components/Header";
import Main from "./components/Main";
import Btn from "./components/btns/Btn";

//*centralizza i dati dell'array
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
