

function List(props)
{
    const item=props.items
   
   return (
  <ul>
        {item.map(item => (
                <li key={item.id}>
                    {item.name} - {item.calories}
                </li>
        ))}
  </ul>
);

   
}

export default List