import PropTypes from "prop-types";

const Carts = ({ courses, remaining, credits, coursePrice }) => {
  return (
    <div className=" lg:w-1/3 bg-white mx-5 rounded-lg shadow-xl mt-14 px-8 lg:h-auto lg:max-h-96">
      <div>
        <h1 className="text-lg font-semibold text-blue-600 py-4">
          Credit Hour Remaining {remaining} hr
        </h1>
        <hr />
        <h1 className="text-lg font-bold pt-4 ">Course Name</h1>
        <ul className="list-decimal p-4">
          {courses.map((course) => (
            <div key={course.id}>
              <li className="text-slate-500">{course.course_name}</li>
            </div>
          ))}
        </ul>
        <hr />
      </div>
      <h2 className="py-4 font-medium">Total Credit Hour : {credits} </h2>
      <hr />
      <h2 className="py-4 font-semibold">Total Price : {coursePrice} USD</h2>
    </div>
  );
};
Carts.propTypes = {
  courses: PropTypes.array,
  remaining: PropTypes.number,
  credits: PropTypes.number,
  coursePrice: PropTypes.number,
};
export default Carts;
