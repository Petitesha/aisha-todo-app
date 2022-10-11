
import { FiEdit} from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';


const Card= () => {
    return (
        <div className='w-64 py-5 rounded-t-lg border-slate-400 border-t-red-600'>
           <div className='w-4/5 m-auto'>
            <h3>React</h3>
            <p>Learn all basic concepts of react</p>
            <div className='flex justify-end items-center'>
                <div className='nmr-5'>
                    <FiEdit />     
                </div>
                <div>
                    <RiDeleteBin6Line/>
                </div>
            </div>
           </div>
        </div>
    );
}


export default Card;