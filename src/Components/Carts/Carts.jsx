
import PropTypes from 'prop-types';

const Carts = ({courses,remaining,credits,coursePrice}) => {
   
    
   
   
    return (
        <div className=" md:w-1/3 bg-white mx-5 rounded-lg shadow-xl mt-14 px-8 ">
        
        <div>

        <h1 className='text-lg font-semibold text-blue-600 py-4'>Credit Hour Remaining {remaining} hr</h1>
            <hr />
            <h1 className='text-lg font-semibold pt-4 '>Course Name</h1>
            <ul className='list-decimal p-4'>
           {
           courses.map((course) =>(
            <div key={course.id}>
                 
                  <li>{course.course_name}</li>
                 
                 
                  

            </div>
           
           ))
               
            
           }
           </ul>
           <hr />
        </div>
           <h2 className='py-4 list-decimal'>Total Credit Hour : {credits} </h2>
           <hr />
           <h2 className='py-4 list-decimal'>Total Price : {coursePrice}</h2>
        </div>
    );
};
Carts.propTypes ={
    courses :PropTypes.array,
    
}
export default Carts;