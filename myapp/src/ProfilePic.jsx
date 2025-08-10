// handling events


function ProfilePic()
{
    const click=(e)=>{e.target.style.display="none"
        console.log(e)
    }
    const url='./public/harsha.png';
    return(<img  onClick={(e)=>click(e)}  src={url} ></img>);
}
export default ProfilePic