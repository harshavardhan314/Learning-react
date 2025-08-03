
function Card(props)
{
    return(
        <div className="content">
            <img src="img.png" alt="" />
            <h1>{props.name}</h1>
            <h1>{props.stack}</h1>
            <p>
                competative programmer and mern stack developer
            </p>

        </div>
    );

}
export default Card;