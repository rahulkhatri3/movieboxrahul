import { useContext, useEffect, useState } from "react";
import React from "react";

// context Api (jha data store hoga)
// context provider (ye data bhejne ka kaam krega)
// context consumer ( useContext jo data recieve krega or hum use krenge)

const API_KEY = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext = React.createContext();

const AppProvider =({children}) =>{ 
const [isLoading, setIsLoading]= useState(true);
const [movies, setMovies]= useState([]);
const [isError, setIsError]= useState({show:false, msg:""});
const [query, setQuery]= useState("titanic");
const GetMovies = async(url)=>{
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        if (data.Response === "True"){
            setIsLoading(false);
            setIsError({show:false, msg:""})
            setMovies(data.Search)
        }
         
        else{
            setIsError({show:true, msg:data.Error})
        }
    } catch (error) {
        console.error(error);
    
    }
};


useEffect(()=>{
    let timeOut =setTimeout(()=>{
    GetMovies(API_KEY + `&s=${query}`);
    },300);
return()=> clearTimeout(timeOut);

},[query])
    return <AppContext.Provider value={{isLoading, movies, isError,query, setQuery}}>{children}</AppContext.Provider>;
}

const UseGlobalContext =()=>{
    return useContext(AppContext)
} 



export {AppContext, AppProvider, UseGlobalContext};
