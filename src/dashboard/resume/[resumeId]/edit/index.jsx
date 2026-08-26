import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const EditResume = () => {
    const params = useParams();

    useEffect(()=>{
        console.log(params.resumeId)
    },[]);
  return (
    <div>EditResume</div>
  )
}

export default EditResume