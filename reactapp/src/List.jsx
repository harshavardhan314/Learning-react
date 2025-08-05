

function List()
{
    const arr=["apple","pineapple","banana"]
    const ele=arr.map(arr=><li>{arr}</li>)
    return(<ul>{ele}</ul>)
}

export default List