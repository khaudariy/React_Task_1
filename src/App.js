import logo from './logo.svg';
import './App.css';
// import Heeader from "./Heeader"
// import POsts from './Posts';
// import ButtonBorder from './ButtonBorder';

function App() {
  const tasks = [
    {id: 1 , title: "hossam"},
    {id: 2 , title: "Hossam"},
    {id: 3 , title: "h0ssam"},
    {id: 4 , title: "ho$sam"},
    {id: 5 , title: "hosam"},
  ]
  const mytasklist = tasks.map((tasks) => {
  
      return (
      <div key={tasks.id}>
        <li>{tasks.title}</li>
      </div>);
      });
      return (
        <>
        
         {mytasklist}
        
        </>
      )
    
    {/* <Heeader/>
    <ButtonBorder />
    <POsts name = "Hossam1" article = "ARC1"/>
    <POsts name = "Hossam2" article = "ARC2"/>
    <POsts name = "Hossam3" article = "ARC3"/> */}
    // <div>

    // </div>

    }

export default App;
