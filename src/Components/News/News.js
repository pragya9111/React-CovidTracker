import React, { useContext, useEffect } from 'react'
import '../News/News.css'
import loader from '../News/loader.gif'
import {data} from '../Context/Context'

function News() {
  const {news,setnews} = useContext(data)
  
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?category=health&country=in&apiKey=dec08c7ddc114fac8619477380047372`)
        .then(res => res.json())
        .then(response => {
            console.log(response)
            setnews(response.articles)
        })
        .catch(err => {
            console.log(err)
        })
}, [])

const hold = news.map((elem, index) => {
if (elem.author !== null && elem.content !== null && elem.description !== null && elem.urlToImage !== null) {
  return         <div className='newsholder4' key={index} id={index}>
            <div className='txt4'>
                <h4><b>Headline:</b> {elem.description}</h4>
                <h5>Article By: {elem.author}</h5>
            </div>
            <div className='img4'>
                <img src={elem.urlToImage} alt='' />
            </div>
        </div>
}    
})

return (
    <div className='newscontainer4'>
        <div className='head' >
          <h3>Other health related news</h3>
      </div>
        {news.length > 0 ? hold : <div className='load4' ><img src={loader} alt='' className='loading4' /></div> 
        }
    </div>
)




  // useEffect(() => {
  //   const Apikey = "dec08c7ddc114fac8619477380047372"
  //   fetch(`https://newsapi.org/v2/top-headlines?category=health&country=in&apiKey=${Apikey}`)
  //     .then(rs => rs.json())
  //     .then(response => {
  //       setnews(response.articles)
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });

  // }, [])
  
  // return (
  //   <div className='news'>
  //     <h4>6tfygchgvhvuyy7t67tyg</h4>
  //   </div>
  // )
}

export default News