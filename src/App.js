import {useEffect, useState} from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

//4026541b
const API_URL="http://www.omdbapi.com?apikey=4026541b";



const App = () => {
    const [movies,setMovies]=useState([]);
    const [searchTerm,setSearchTerm]=useState('');//adding empty string because we wanted for the search bar to be empty befor typing somthing on it

    const searchMovies=async (title) =>{
        const response=await fetch(`${API_URL}&s=${title}`);
        const data=await response.json();

        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('Spiderman');

    },[]);


    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input placeholder="Search for movies " value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}/>
                <img src={SearchIcon} alt="search" onClick={()=> searchMovies(searchTerm)}/>
                
            </div>
            {
                movies?.length>0
                ?(
                    <div className="container">
                {movies.map((movie) => (
                    <MovieCard movie={movie}/>
                ))}
            </div>
                ) :
                (
                    <div className="empty"><h2>No movies founded</h2></div>
                )
            }
            
        </div>
    );
}

export default App;
