import "./Spinner.css";
import { FaSpinner } from 'react-icons/fa';

export const Spinner = () => {
    return(
        <div className="spinner">
            <FaSpinner className="spinning" />
        </div>
    )
}