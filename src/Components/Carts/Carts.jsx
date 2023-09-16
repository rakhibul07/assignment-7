
import PropTypes, { element } from 'prop-types';
const Carts = ({courses}) => {
   
   
    return (
        <div className=" md:w-1/3 bg-white mx-5 rounded-lg shadow-xl mt-14 px-8 ">
        <div>
        <h1 className='text-lg font-semibold text-blue-600 py-4'>Credit Hour Remaining </h1>
            <hr />
            <h1 className='text-lg font-semibold py-4'>Course Name</h1>
           {
           courses.map((course) =>(
            <div key={course.id}>
                   <h1>{course.course_name}</h1>
                 
                  

            </div>
           
           ))
               
            
           }
           <hr />
        </div>
           <h2 className='py-4'>Total Credit Hour : </h2>
           <hr />
           <h2 className='py-4'>Total Price : </h2>
        </div>
    );
};
Carts.propTypes ={
    courses :PropTypes.array
}
export default Carts;