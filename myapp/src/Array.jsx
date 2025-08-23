

function Array()
{
    const arr=[1,2,{name:"sachin"}];
    return <div>
        <h1>Array Component</h1>
        {
            arr.map((item)=><h2>{JSON.stringify(item)}</h2>)
        }   
    </div>
}
export default Array;