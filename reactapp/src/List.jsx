

function List()
{
    const arr=[{name:"apple" ,id:1,calories:30},{name:"pineapple",id:2,calories:40},{name:"banana",id:3,calories:50}]
    

    arr.sort((a,b)=>b.calories-a.calories)
   const ele=arr.map(arr=><li key={arr.calories}>
    {arr.calories} :&nbsp; {arr.name}
   </li>)
   return(<ul>{ele}</ul>)
}

export default List