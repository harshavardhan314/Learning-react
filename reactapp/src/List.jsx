

function List(props)
{
    const item=props.items
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