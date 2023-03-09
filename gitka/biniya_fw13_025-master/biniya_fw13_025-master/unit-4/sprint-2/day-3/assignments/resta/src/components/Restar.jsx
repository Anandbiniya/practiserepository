import React, { useEffect } from 'react'

function Restar() {
  useEffect(()=>{
    const getdata=async ()=>{
      let res=await fetch('http://localhost:8010/rest')
      let data=await res.json();
      console.log(data)
  }
  },[])
   
    
    

  return (
    <div></div>
    

    
  )
}

export default Restar