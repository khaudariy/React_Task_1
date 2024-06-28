import logo from './logo.svg';
import './App.css';
import Heeader from "./Heeader"
import POsts from './Posts';
import ButtonBorder from './ButtonBorder';

function App() {
  return (
    <>
    
    <Heeader/>
    <ButtonBorder />
    <POsts name = "Hossam1" article = "ARC1"/>
    <POsts name = "Hossam2" article = "ARC2"/>
    <POsts name = "Hossam3" article = "ARC3"/>

  </>
  );
}

export default App;
