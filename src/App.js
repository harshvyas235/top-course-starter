import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar"
import Cards from "./component/Cards"
import Filter from "./component/Filter"
import { filterData, apiUrl } from "./data";
import Spinner from "./component/Spinner";
// import { useState } from "react";


const App = () => {
  function setcard() {
    // if(spinner==true){
    //   <Spinner/>
    // }
    // else{
    //   <Cards courses ={courses}/>
    // }
    spinner ? (<Spinner />) : (<Cards courses={courses} />)
  }

  const [courses, setcouse] = useState([])
  const [spinner, setspinner] = useState(true)
  const [category, setcategory] = useState(filterData[0].title)
  console.log("this is the category"+category)
  async function fetchdata() {
    setspinner(true)


    try {
      let fetchdata = await fetch(apiUrl)
      let output = await fetchdata.json();
      setcouse(output.data)
    }
    catch (error) {
      console.log("error aai hai ")

    }
    setspinner(false)

  }
  useEffect(() => {
    fetchdata();
  }, [])

  return <div className="bg-bgDark2 min-h-screen ">
    <div>
      <Navbar />

    </div>
    <div className="bg-bgDark2">
      <div>
        {
          <Filter filter={filterData} category={category} setcategory={setcategory} ></Filter>

        }

      </div>

      <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          spinner ? (<Spinner />) : (<Cards courses={courses} category={category} />)

        }
      </div>


    </div>

  </div>;
};

export default App;
