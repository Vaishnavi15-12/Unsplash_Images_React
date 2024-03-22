import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const url = "https://api.unsplash.com/search/photos?client_id=2PCfxA4Ok_oapxu4Odq74-L5CBiXrwOgNuOE3ZR0zRI&query=office"

const Gallery = () => {
  const response = useQuery({
    queryKey:['images'],
    queryFn: async () => {
      const result = await axios.get(url);
      return result.data;
    }
  });
  console.log(response);
  if(response.isLoading){
    <section className='image-container'>
      <h4>Loading...</h4>
    </section>
  }
  if(response.isError){
    <section className='image-container'>
      <h4>There was an error...</h4>
    </section>
  }
  const result = response.data.results
  if(result.length < 1){
    <section className='image-container'>
      <h4>No results found...</h4>
     </section>
  }
  return (
    <section className='image-container'>
      {result.map((item) => {
        const url = item?.urls?.raw
        
        return <img src={url} key={item.id} alt={item.alt_description} className='img'></img>
      })}
    </section>
  )
}

export default Gallery
