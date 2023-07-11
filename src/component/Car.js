import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify'


export const Car = (props) => {
   let course=props.courses
   console.log(course)
   let likedcourse =props.likedcourse
   let setcourse= props.setcourse
   function clickhandler(){
    if (likedcourse.includes(course.id)) {
        setcourse( (data) => data.filter((cid)=> (cid !== course.id) )  );
        toast.warning("like removed")
        
    }
    else {
        //pehle se like nahi hai ye course
        //insert karna h ye course liked courses me 
        if(likedcourse.length === 0 ) {
            setcourse([course.id]);
        }
        else {
            //non-empty pehle se
            setcourse((prev) => [...prev, course.id]);
        }
        toast.success("Liked Successfully");
    }
   }
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden' >
        <div className='relative'>
            <img src={course.image.url}></img>
            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center'>
                <button onClick={clickhandler}>{
                    likedcourse.includes(course.id) ? 
                        (<FcLike fontSize="1.75rem" />)
                        :(<FcLikePlaceholder fontSize="1.75rem" />)
                }
              
                </button>
            </div>
        </div>

        <div>
            <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
            <p className='mt-2 text-white'>{
                course.description.length >100 ? 
                        (course.description.substr(0,100)) + "..." :
                        (course.description)
            }</p>
        </div>
    </div>
  )
}

export default Car