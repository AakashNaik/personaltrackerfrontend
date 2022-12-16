
// import MyResponsivePie from '../../graphs/pie_charts';
// import data from '../../data/data.json';
import ListBox from '../ui/dropdown';
import { useRef } from 'react';
const people = [
    { name: 'react & node'},
    { name: 'startup' },
    { name: 'web3' },
    { name: 'english & speaking' },
    { name: 'no code/low code tools' },
    { name: 'aws' },
    { name: 'other'},
  ]

function handleSubmit(inputref,listref){

    const topic = listref.current.getSelection();
    const current =new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
    if(topic!=null&& inputref.current!=null)
    {
        fetch("http://localhost:4001/api/post", {
     
            // Adding method type
            method: "post",
            headers: {'Content-Type': 'application/json'},
            // Adding body or contents to send
            body: JSON.stringify({
                topic: topic.name,
                input: inputref.current.value,
                date:  date,
            }),
            
            // Adding headers to the request
            // headers: {
            //     "Content-type": "application/json; charset=UTF-8"
            // }
        })
        
        // Converting to JSON
        .then(response => response.json())
        
        // Displaying results to console
        .then(json => console.log(json));
            }
}
export default function AddTask()
{
    const listref = useRef(null);
    const inputref = useRef(null);
    //const dropselection = useRef(null);
    //dropselection.current = inputref.selection.getSelection();
    return(
    <div className = 'container'>
        
        <ListBox data={people} ref={listref}/>
        <div className='flex container1'>
            <div style={{marginLeft:'2rem'}}>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                <input ref={inputref} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="latest read" required/>
            </div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> handleSubmit(inputref,listref)}>
               Submit
            </button>
        </div>
    </div>
    )
}