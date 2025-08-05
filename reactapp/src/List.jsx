

function List()
{
    const arr=[{name:"apple" ,id:1,calories:100},{name:"pineapple",id:2,calories:40},{name:"banana",id:3,calories:50}]
    

   const lowcal=arr.filter(arr=>arr.calories<100)
   return (
  <ul>
        {lowcal.map(item => (
                <li key={item.id}>
                    {item.name} - {item.calories}
                </li>
        ))}
  </ul>
);

   
}

export default List