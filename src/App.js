import logo from './logo.svg';
import './App.css';
import Heeader from "./Heeader"
import POsts from './Posts';
import ButtonBorder from './ButtonBorder';

function App() {
  const posts = [
    {id:1 , name: "Hossam" , article: "java"},
    {id:2 , name: "Hossam2" , article: "java2"},
    {id:3 , name: "Hossam3" , article: "java3"},
    {id:4 , name: "Hossam4" , article: "java4"},
    {id:5 , name: "Hossam5" , article: "java5"},
  ];
  const postlist= posts.map((post) => {
    return <POsts key={post.id} name={post.name} article={post.article}  />

  });
  // const tasks = [
  //   {id: 1 , title: "hossam"},
  //   {id: 2 , title: "Hossam"},
  //   {id: 3 , title: "h0ssam"},
  //   {id: 4 , title: "ho$sam"},
  //   {id: 5 , title: "hosam"},
  // ]
  // const mytasklist = tasks.map((tasks) => {
  
  //     return (
  //     <div key={tasks.id}>
  //       <li>{tasks.title}</li>
  //     </div>);
  //     });
      return (
        <>
        
        <Heeader/>
    <ButtonBorder />
    {postlist}

        
        </>
      )
    
    {/*  */}
    // <div>

    // </div>

    }

export default App;
