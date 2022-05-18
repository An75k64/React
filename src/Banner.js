import {useState} from 'react';

function Banner()
{

    let [name,setName]=useState("Bruce Banner");
   // let name="Bruce Banner";

    function changeName(){
        setName("Hulk");
    }

    return(
        <div className="banner">
            <h1>{name}</h1>
            <button className="btn" onClick={changeName}>Change Data</button>
        </div>
    )
}
export default Banner;