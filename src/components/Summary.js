import MyResponsivePie from '../graphs/pie_chart';
import data from '../data/data.json';

export default function Summary()
{

    return(
        <div className='maincomp'>
         <MyResponsivePie data={data}/>;
        </div>
    )
}