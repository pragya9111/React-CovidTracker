import React, { useState, useEffect } from 'react'
import '../src/App.css'
import { data } from './Components/Context/Context'
import Nav from './Components/Navbar/Nav'
import Report from './Components/Report/Report'
import News from './Components/News/News'

function App() {

  const [news, setnews] = useState([])

  useEffect(() => {
    const Apikey = "dec08c7ddc114fac8619477380047372"
    fetch(`https://newsapi.org/v2/top-headlines?category=health&country=in&apiKey=${Apikey}`)
      .then(rs => rs.json())
      .then(response => {
        setnews(response.articles)
      })
      .catch(err => {
        console.error(err);
      });

  }, [])

  return (
    <div className='main'>
      <Nav/>
      <div className='container' >
        <data.Provider value={{ news, setnews }}>
          <Report/>
          <News/>
        </data.Provider>
      </div>
    </div>

  )
}
export default App
