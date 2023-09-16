
import { useState } from 'react';
import './App.css'
import Cards from './Components/Cards/Cards'
import Carts from './Components/Carts/Carts';
function App() {
const [courses, setCourses] =useState([]);
const handleAddCourse = card =>{
  setCourses([...courses, card]);
}

  return (
    <div className='bg-gray-100 flex gap-3 justify-evenly max-w-7xl mx-auto '>
    <Cards handleAddCourse={handleAddCourse}></Cards>
    <Carts courses={courses}></Carts>
    </div>
  )
}

export default App
