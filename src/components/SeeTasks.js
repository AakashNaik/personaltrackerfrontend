
import { useEffect, useState } from "react";

export default function SeeTasks()
{
    const [msg,setmsg] = useState('Not called');
    useEffect(()=>{fetch('http://localhost:4001/api/getAll').then(res=>{console.log(res);return res.json();}).then(data => {console.log(data);setmsg(data.output)})},[]);
    return(
        <>
         <div>{msg}</div>
        </>
    )
}