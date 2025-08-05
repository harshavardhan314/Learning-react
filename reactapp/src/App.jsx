import List from './List.jsx'

function App() {


  const arr=[{name:"apple" ,id:1,calories:100},{name:"pineapple",id:2,calories:40},{name:"banana",id:3,calories:50}]
  return (
    <>
    
          <List items={arr}/>
    </>
  );
}

export default App;
