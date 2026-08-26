import { Notebook } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function ResumeCardItem({resume}) {
  return (
    <Link to = {`/dashboard/resume/${resume.resumeId}/edit`}>
        <div className = 'p-14 bg-secondary flex items-center justify-center h-70 border border-primary rounded-lg hover:scale-105 transition-all hover:shadow-sm shadow-primary cursor-pointer'>
            <Notebook/>
        </div>
        <h2 className='text-center my-4'>{resume.title}</h2>
    </Link>
  )
}

export default ResumeCardItem