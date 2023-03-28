import './App.css';
import { Navbar } from '../src/componentes/Navbar/Navbar';
import ItemListConteiner from './componentes/itemlistconteiner/itemlistconteiner';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListConteiner greeting={'Bienvenidos'}/>
    </div>
  );
}

export default App;
