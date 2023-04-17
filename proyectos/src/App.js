import NavBar from "./components/NavBar/NavBar";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";




function App() {
  return (
   <>
    <NavBar/>
    <ItemCount/>
    <ItemListContainer/>
    <ItemDetailContainer/>
  </>
  );
}

export default App;
