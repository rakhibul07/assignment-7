import { GoBook } from "react-icons/go";
import { FiDollarSign } from "react-icons/fi";
import PropTypes from 'prop-types';

const Card = ({card,handleAddCourse}) => {
    const {img, course_name, description,price,credit_hours} = card;
    return (
        <div className="bg-white shadow-lg rounded-lg">
            <img src= {img} className="lg:p-3"/>
            <h2 className="text-md font-medium text-center">{course_name}</h2>
            <p className="text-sm text-justify p-3 text-gray-500">{description}</p>
           <div className="flex justify-between px-4 text-gray-600">
           <div className="flex justify-between items-center gap-1">
                <span><FiDollarSign></FiDollarSign></span>
                <h4 className="text-grey-500">Price: {price}</h4>
            </div>
            <div className="flex justify-between items-center gap-1">
                <span><GoBook></GoBook></span>
                <h4 className="text-grey-500">Credit: {credit_hours}hr</h4>
            </div>
           </div>
            <div className="p-3">
            <button onClick={()=>handleAddCourse(card)}
              className="btn w-full bg-blue-500 text-white hover:text-black hover:bg-white">Select</button>
            </div>
            
        </div>
    );
};
Card.propTypes ={
    card :PropTypes.object,
    handleAddCourse:PropTypes.func
}
export default Card;