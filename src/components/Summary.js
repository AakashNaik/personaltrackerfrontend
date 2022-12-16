import MyResponsivePie from '../graphs/pie_chart';
import data from '../data/data.json';
import { useState, useEffect } from 'react';

var groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    x[key] in rv? rv[x[key]]++: rv[x[key]]=1;
    return rv;
  }, {});
};
  
const endResult = (data)=>{

  let arr = []
  for (const [key, value] of Object.entries(data)) {
      arr.push({'id':key,'label':key,'value':value})
  }
  return arr;
       
}
export default function Summary()
{

    const [statdata,setstatdata] = useState([]);
    useEffect(()=>{fetch('http://localhost:4001/api/getAll')
    .then((res)=>
          {return res.json();})
    .then((data) => 
        {console.log(data);
         data=data.map((d)=>{ return{'topic':d.topic,'input':d.input,'date':d.date}});
         console.log('data',data);
         data = groupBy(data,'topic');
         data = endResult(data);
         setstatdata(data);
          })},[]);

    return(
        <div className='maincomp'>
         <MyResponsivePie data={statdata}/>;
        </div>
    )
}