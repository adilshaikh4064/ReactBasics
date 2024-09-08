import React, { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data=useLoaderData();
    // const [data,setData]=useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/adilshaikh4064')
    //     .then((res)=>res.json()).
    //     then((data)=>{
    //         //console.log(data)
    //         setData(data);
    //     })
    // },[])
    return( 
        <div className="text-center m-4 p-4 text-3xl text-white bg-gray-600">
            Github Followers: {data.followers}
            <img src={data.avatar_url} alt="GitHub Picture" width={300}/>
        </div>
    );
}

export default Github;

export const githubInfoloader=async ()=>{
    const response=await fetch('https://api.github.com/users/adilshaikh4064')
    return response.json();
}