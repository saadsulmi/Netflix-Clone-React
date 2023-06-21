import React, { useContext, useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import YouTube from 'react-youtube'
import { API_KEY,imageUrl } from '../../Constants/Constants'
import { urlContext } from '../../Context/urlContext'
function Banner() {
  const [movie,setMovie]=useState();
  const [yurl,setYurl]=useState();
  const {setUrl} = useContext(urlContext);
  useEffect(()=>{
    axios.get(`/movie/popular?page=1&sort_by=popularity.desc&api_key=${API_KEY}`)
    .then((res)=>{
      console.log(res.data.results);
      setMovie(res.data.results[Math.floor(Math.random()*20)])
    })
  },[])

  const handleMovie=(id)=>{
    if(id){
      axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((res)=>{
        if(res.data.results.length!==0){
          setYurl(res.data.results[0])
          console.log(res.data.results[0]);
        }else{
          console.log('no value found');
        }
      })
}
  }
  const del=()=>{
    setYurl('');
    setUrl('');
  }
  const opt = {
    height: '390',
    width: '50%',
    playerVars: {
      autoplay: 1,
    }
  };

  return (
    <div style={{backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0,1), rgba(0, 0, 0, 0.3)),  url(${movie?imageUrl+movie.backdrop_path:""})`}} className='banner'>
      <div className='content'>
      <h1 className="title">{movie?movie.original_title:''}</h1>
        <div className="discription">{movie?movie.overview:''}</div>
        <div className="banner-buttons">
            <button onClick={()=>handleMovie(movie.id)} className="button1">play</button>
            <button onClick={del} className="button2">My List</button>
           {yurl&&<YouTube style={{marginBottom:'200px',position:'relative'}} videoId={yurl.key} opts={opt}/>}
        </div>
      </div>
    </div>
  )
}

export default Banner
