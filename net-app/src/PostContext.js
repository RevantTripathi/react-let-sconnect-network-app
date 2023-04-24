import React from "react";

useEf
// import React ,{useState,useContext,useEffect} from 'react'

// const AppContext=React.createContext()

// import axios from 'axios'

// const allMealsUrl='https://www.themealdb.com/api/json/v1/1/search.php?s=a'
// const randomMealUrl='https://www.themealdb.com/api/json/v1/1/random.php'

// const AppProvider=({children})=>{

//   const [meals,setMeals]=useState([])
  

//   const fetchMeals=async(url)=>{
//       try{
//         const {data}= await axios(url)
//         setMeals(data.meals)
//       }catch(err){
//         console.log(err.response)
//       }
//   }

//   useEffect(()=>{
    
//     fetchMeals(allMealsUrl)
//   },[])
  
//   return <AppContext.Provider value={{meals}}>
//     {children}
//   </AppContext.Provider>
// }
// export const useGlobalContext=()=>{
//   return useContext(AppContext)
// }

// export {AppContext,AppProvider}