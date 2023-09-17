
import { useState } from 'react';
import './App.css'
import Cards from './Components/Cards/Cards'
import Carts from './Components/Carts/Carts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
const [courses, setCourses] =useState([]);
const [credits, setCredits] = useState(0);
const [coursePrice, setCoursePrice] = useState(0);

const [remaining, setRemaining] = useState(20);


const handleAddCourse = card =>{
  const isExist = courses.find(item => item.id === card.id);
  let totalCredit = card.credit_hours;
  let totalPrice = card.price;
    if(isExist){
      return toast('Already Enrolled');
      
    }
   
    else{
      courses.forEach((item)=>{
        totalCredit = totalCredit + item.credit_hours;
        totalPrice = totalPrice + item.price;
      })
      const remainingCredit = 20 - totalCredit;
      if(totalCredit > 20){
        return toast("out of credit");
      }
      setCredits(totalCredit);
      setCoursePrice(totalPrice);
      setRemaining(remainingCredit);
      setCourses([...courses, card]);
     
    }
 
}

  return (
    <div className='bg-gray-100 md:flex gap-3 justify-evenly max-w-7xl mx-auto '>
      <ToastContainer></ToastContainer>
      <ToastContainer></ToastContainer>
      
    <Cards handleAddCourse={handleAddCourse}></Cards>
    <Carts courses={courses} remaining={remaining} coursePrice={coursePrice} credits={credits}></Carts>
    </div>
  )
}

export default App
