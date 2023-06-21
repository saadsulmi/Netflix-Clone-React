import React, { useContext, useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { imageUrl, API_KEY } from '../../Constants/Constants'
import YouTube from 'react-youtube';
import { urlContext } from '../../Context/urlContext';
function RowPost(props) {
  const {urls,setUrl}= useContext(urlContext);
  const [movies,setMovies]=useState([]);
  const [yurl,setYurl]=useState()
  useEffect(()=>{
    axios.get(props.url)
    .then((res)=>{
      setMovies(res.data.results)
    }).catch(err=>{
    })
  },[])
  
  const opt = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    }
  };

  const handleMovie=(id)=>{
    if(id){
          axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
          .then((res)=>{
            if(res.data.results.length!==0){
              setYurl('');
              setYurl(res.data.results[0]);
              setUrl(res.data.results[0])
              console.log(yurl);
            }else{
              console.log('no value found');
            }
          })
    }
  }
  return (
    <div className={props.isMain?'rowcard':'rowcardmain'}>
      <h3>{props.title}</h3>
      <div className='posters'>
        {movies.map((obj,index)=>
          <div>
            <img key={index} onClick={()=>handleMovie(obj.id)} className="poster" src={`${imageUrl+obj.backdrop_path}`} alt='poster'/>
          </div>
        )}
      </div>
      {(urls===yurl)&&<YouTube videoId={yurl.key} opts={opt}/>}    
    </div>
  )
}

export default RowPost
