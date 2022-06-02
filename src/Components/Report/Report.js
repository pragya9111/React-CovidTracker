import React, { useState, useContext, useEffect } from 'react'
import '../Report/Report.css'
import { data } from '../Context/Context'

function Report() {
  const [first, setfirst] = useState([])
  const [inp, setinp] = useState('')
  const [state, setstate] = useState([])

  const inphandle = (e) => {
    setinp(e.target.value)
  }

  let hold = ''
  if (state.length > 0) {
    hold = state.map((elem, id) => {
      return <div className='statics'>
        <div className='data' >
          <h3>State:- {elem.province}</h3>
          <h3>Country:-{elem.country}</h3>
        </div>
        <div className='data' >
          <h3>Confirmed</h3>
          <h3>{elem.confirmed}</h3>
        </div>
        <div className='data' >
          <h3>Death</h3>
          <h3>{elem.deaths}</h3>
        </div>
        <div className='data' >
          <h3>Last Update</h3>
          <h3>{elem.lastUpdate}</h3>
        </div>
      </div>
    })
  }

  const search = ()=> {
    const s = inp.toLowerCase()
    var arr = []
    if(first.length>0){
      arr=first.filter((elem)=>{
        return s === elem.province.toLowerCase() ? elem:null
      })
      setinp("")
      setstate(arr)
    }
  }

  useEffect(() => {
    fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=All", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
        "x-rapidapi-key": "4b2459b2b5msh176347269bf4eb5p1c51f4jsn13b540f4b445"
      }
    })
      .then(rs => rs.json())
      .then(response => {
        if (response.data.covid19Stats.length > 0) {
          setfirst(response.data.covid19Stats.slice(250, 286))
          // console.log(response)
        }
      })
      .catch(err => {
        console.error(err);
      });
  }, [])
  console.log(first);

  return (
    <div className='report'>
      <div className='search'>
        <i class="ri-search-line"></i>
        <input type="text" value={inp} onChange={inphandle} placeholder="Enter any state . . ." />
        <button onClick={search} >Search</button>
      </div>

      <div className='box' >
      {state.length>0?hold:<h2>Search for details</h2>}                 
      </div>
    </div>
  )
}

export default Report