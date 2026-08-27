import React from 'react'

function SummaryPreview({resumeInfo}) {
  return (
    <div>
      <p className='text-gray-700 text-xs'>
        {resumeInfo?.summary}
      </p>
    </div>
  )
}

export default SummaryPreview