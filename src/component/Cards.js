import React, { useState } from 'react'
import Car from './Car'



export const Cards = (props) => {
  let courses = props.courses
  let allcourse = []
  const[likedcourse, setcourse]=useState([])
  let category=props.category

  function getdata(){
    if (category=="All") {
      Object.values(courses).forEach(data => {
        data.forEach(corsedata => {
  
          allcourse.push(corsedata);
        })
  
      }
  
  
      )
      return allcourse;
    }
    
       else{
       return courses[category]
       }
  }
   

  return (
    <div  className="flex flex-wrap justify-center gap-4 mb-4">
      {
       
       getdata().map(courses=>(
        <Car courses={courses} likedcourse ={likedcourse} setcourse ={setcourse}></Car>

       ))

        

        
        
        

      }

      


    </div>
  )
}

export default Cards