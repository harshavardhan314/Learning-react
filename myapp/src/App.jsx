import FirstComponent from './FirstComponent'
import New from './New'





const car={
  brand: "Toyota",
  model: "Corolla", 
  year: 2020,
}
function App() {

  return (
   <div className="app">
      <FirstComponent car={car}/>
      <New></New>
   </div>
  )
}

export default App
