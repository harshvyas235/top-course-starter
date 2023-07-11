import React from 'react'

export const Filter = (props) => {
    let filter= props.filter
    let category=props.category
    let setcategory=props.setcategory
    function fildata(title){
      setcategory(title)
    }

    
  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
        {
           filter.map(data=>(
                <button className={`text-lg px-2 py-1 rounded-md font-medium 
            text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300` } 
            onClick={()=>fildata(data.title) }
            >{data.title}</button>
           )
            )
        }
    </div>
  )
}
export default Filter;
