function List({ items = [{ id: 0, name: "orange", calories: 80 }] }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.name} - {item.calories}
        </li>
      ))}
    </ul>
  );
}

export default List;
