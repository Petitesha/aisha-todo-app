import  classes from '../Card/Card.module.css';
import { FiEdit} from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';


const Card= () => {
    return (
        <div className={classes.cardContainer}>
           <div className={classes.innerCard}>
            <h3>React</h3>
            <p>Learn all basic concepts of react</p>
            <div className={classes.editDelete}>
                <div className={classes.edit}>
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