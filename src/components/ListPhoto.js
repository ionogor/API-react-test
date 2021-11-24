import React, {useEffect, useState} from "react";
import "./style.css"
const ListPhoto=()=>{

    const[photo, setPhoto]=useState([]);
    const [data,setData]=useState(false);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json => setPhoto(json))
    },[])

    function Items({currentItems}){
        return(
            <>
            </>
        )
    }
    const toogle=()=>{
        setData(!data);
    }
    return(

        <div>
            <button onClick={toogle}>Photo</button>
            {data &&
            <div className="img-style">
                {photo.map((el) => {
                    return (
                        <>
                            <img src={el.thumbnailUrl} alt="img"/>
                            <p>{el.title}</p>
                        </>


                    );
                })}
            </div>

            }

        </div>
    )
}

export default ListPhoto;