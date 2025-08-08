// App.jsx
import List from './List';

function App() {
  const data = [
    { id: 1, name: "apple", calories: 30 },
    { id: 2, name: "pineapple", calories: 40 },
    { id: 3, name: "banana", calories: 50 },
  ];

  return (
   <List items={data}></List>
  );
}

export default App;
