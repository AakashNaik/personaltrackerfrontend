import MyResponsivePie from '../graphs/pie_chart';
import MyResponsiveBar from '../graphs/bar_graph';
import data from '../data/data.json';
import { useState, useEffect } from 'react';

const score = (data)=>{

   let temp=0;
   data.forEach(d=>{
    let date = parseInt(d.date.split('/')[0]); 
    let today = new Date(); 
    let wgt = Math.E**-(today.getDate()-date);
    temp+= wgt; })
    //setcurrscore(temp);
    return temp;
}

export default function Summary()
{

    const [statdata,setstatdata] = useState([]);
    const [currscore, setcurrscore] = useState(0);
    useEffect(()=>{fetch('http://localhost:4001/api/getAll')
    .then((res)=>
          {return res.json();})
    .then((data) => 
        {console.log(data);
         data=data.map((d)=>{ return{'topic':d.topic,'input':d.input,'date':d.date}});
         console.log('data',data);
         //data = groupBy(data,'topic');
         //data = endResult(data);
         setstatdata(data);
          })},[]);


    useEffect(()=>{setcurrscore(score(statdata))},[statdata])      
    return(
        <div className='maincomp'>
         <div class='shadow-2xl' style={{height:'600px', width:'800px', marginLeft:'50px', display: 'flex', flexWrap: 'wrap'}}>
         <MyResponsivePie data={statdata}/>
         </div>
         <div>Current Score: {currscore}</div>
         <div style={{height:'600px'}}>
         <MyResponsiveBar data={statdata}/>
         </div>
        </div>
    )
}