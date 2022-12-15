
import { useEffect, useState } from "react";

export default function SeeTasks()
{
    const [msg,setmsg] = useState([]);
    useEffect(()=>{fetch('http://localhost:4001/api/getAll')
    .then((res)=>
          {return res.json();})
    .then((data) => 
        {console.log(data);
         data=data.map((d)=>{ return{'topic':d.topic,'input':d.input}});
         console.log('data',data);
         setmsg(data);
          })},[]);

    //useEffect(()=>{console.log('checking',msg);console.log(msg.map((data)=>{return data.topic}))},[msg])
        
    
    return(
        <>
          <div>{msg.map((data)=>{return <div>{data.input} and {data.topic}</div>})}</div>
        </>
    )
}